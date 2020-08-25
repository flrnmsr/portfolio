var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _getBasicImageProps = _interopRequireDefault(require('./utils/getBasicImageProps'))

var _buildImageUrl = _interopRequireDefault(require('./utils/buildImageUrl'))

var _helpers = require('./utils/helpers')

var _defaults = require('./defaults')

function getFixedGatsbyImage(image, args = {}) {
  let imageProps = (0, _getBasicImageProps.default)(image)

  if (!imageProps) {
    return null
  }

  let options = Object.assign({}, _defaults.defaultFixedOptions, args)
  let width = options.width,
    height = options.height,
    base64 = options.base64,
    useBase64 = options.useBase64
  let _imageProps$metadata = imageProps.metadata,
    dimensions = _imageProps$metadata.dimensions,
    lqip = _imageProps$metadata.lqip,
    originalPath = imageProps.originalPath
  let desiredAspectRatio = dimensions.aspectRatio // If we're cropping, calculate the specified aspect ratio

  if (options.height) {
    desiredAspectRatio = width / options.height
  }

  let forceConvert = null

  if (options.toFormat) {
    forceConvert = options.toFormat
  } else if ((0, _helpers.isWebP)(originalPath)) {
    forceConvert = 'jpg'
  }

  let widths = _defaults.sizeMultipliersFixed.map(scale => Math.round(width * scale))

  let initial = {
    webp: [],
    base: []
  }
  let srcSets = widths
    .filter(currentWidth => currentWidth < dimensions.width)
    .reduce((acc, currentWidth, i) => {
      let resolution = `${_defaults.sizeMultipliersFixed[i]}x`
      let currentHeight = Math.round(currentWidth / desiredAspectRatio)
      let size = Object.assign({}, options, {
        width: currentWidth,
        height: currentHeight
      })
      let webpUrl = (0, _buildImageUrl.default)(
        originalPath,
        Object.assign({}, size, {
          format: 'webp'
        })
      )
      let baseUrl = (0, _buildImageUrl.default)(
        originalPath,
        Object.assign(
          {},
          size,
          forceConvert && {
            format: forceConvert
          }
        )
      )
      acc.webp.push(`${webpUrl} ${resolution}`)
      acc.base.push(`${baseUrl} ${resolution}`)
      return acc
    }, initial)
  let outputHeight = Math.round(height ? height : width / desiredAspectRatio)
  let imgSize = Object.assign({}, options, {
    width: width,
    height: outputHeight
  })
  let src = (0, _buildImageUrl.default)(
    originalPath,
    Object.assign(
      {},
      imgSize,
      forceConvert && {
        format: forceConvert
      }
    )
  )
  let srcWebp = (0, _buildImageUrl.default)(
    originalPath,
    Object.assign({}, imgSize, {
      format: 'webp'
    })
  ) // base64String

  return {
    base64: useBase64 ? base64 || lqip : null,
    aspectRatio: desiredAspectRatio,
    width: Math.round(width),
    height: outputHeight,
    src,
    srcWebp,
    srcSet: srcSets.base.join(',\n') || null,
    srcSetWebp: srcSets.webp.join(',\n') || null
  }
}

var _default = getFixedGatsbyImage
exports.default = _default
