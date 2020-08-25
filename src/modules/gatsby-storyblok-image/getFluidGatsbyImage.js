var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _getBasicImageProps = _interopRequireDefault(require('./utils/getBasicImageProps'))

var _buildImageUrl = _interopRequireDefault(require('./utils/buildImageUrl'))

var _helpers = require('./utils/helpers')

var _defaults = require('./defaults')

function getFluidGatsbyImage(image, args = {}) {
  let imageProps = (0, _getBasicImageProps.default)(image)

  if (!imageProps) {
    return null
  }

  let options = Object.assign({}, _defaults.defaultFluidOptions, args)
  let maxWidth = options.maxWidth,
    base64 = options.base64,
    useBase64 = options.useBase64
  let _imageProps$metadata = imageProps.metadata,
    dimensions = _imageProps$metadata.dimensions,
    lqip = _imageProps$metadata.lqip,
    originalPath = imageProps.originalPath
  let desiredAspectRatio = dimensions.aspectRatio // If we're cropping, calculate the specified aspect ratio

  if (options.maxHeight) {
    desiredAspectRatio = maxWidth / options.maxHeight
  }

  let maxHeight = options.maxHeight || Math.round(maxWidth / dimensions.aspectRatio)
  let forceConvert = null

  if (options.toFormat) {
    forceConvert = options.toFormat
  } else if ((0, _helpers.isWebP)(originalPath)) {
    forceConvert = 'jpg'
  }

  let sizes = options.sizes || `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`

  let widths = _defaults.sizeMultipliersFluid
    .map(scale => Math.round(maxWidth * scale))
    .filter(width => width < dimensions.width)
    .concat(dimensions.width)

  let initial = {
    webp: [],
    base: []
  }
  let srcSets = widths
    .filter(currentWidth => currentWidth < dimensions.width)
    .reduce((acc, currentWidth) => {
      let currentHeight = Math.round(currentWidth / desiredAspectRatio)
      let size = {
        width: currentWidth,
        height: currentHeight
      }
      let webpUrl = (0, _buildImageUrl.default)(
        originalPath,
        Object.assign({}, options, size, {
          format: 'webp'
        })
      )
      let baseUrl = (0, _buildImageUrl.default)(
        originalPath,
        Object.assign({}, options, size, {
          format: forceConvert
        })
      )
      acc.webp.push(`${webpUrl} ${currentWidth}w`)
      acc.base.push(`${baseUrl} ${currentWidth}w`)
      return acc
    }, initial)
  let imgSize = {
    width: maxWidth,
    height: maxHeight
  }
  let src = (0, _buildImageUrl.default)(
    originalPath,
    Object.assign({}, options, imgSize, {
      format: forceConvert
    })
  )
  let srcWebp = (0, _buildImageUrl.default)(
    originalPath,
    Object.assign({}, options, imgSize, {
      format: 'webp'
    })
  )
  return {
    base64: useBase64 ? base64 || lqip : null,
    aspectRatio: desiredAspectRatio,
    src,
    srcWebp,
    srcSet: srcSets.base.join(',\n') || null,
    srcSetWebp: srcSets.webp.join(',\n') || null,
    sizes
  }
}

var _default = getFluidGatsbyImage
exports.default = _default
