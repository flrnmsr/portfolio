exports.__esModule = true
exports.default = void 0

var _defaults = require('../defaults')

var _helpers = require('./helpers')

function buildImageUrl(originalPath, image) {
  let width = image.width,
    height = image.height,
    smartCrop = image.smartCrop,
    quality = image.quality,
    format = image.format,
    fill = image.fill

  let _originalPath$split = originalPath.split('.'),
    extension = _originalPath$split[1]

  let url = _defaults.STORYBLOK_BASE_URL

  if (width && height) {
    url += `/${width}x${height}`
  }

  if (smartCrop) {
    url += `/smart`
  }

  let filters = [
    ...[quality && `quality(${quality})`],
    ...[format && format !== extension && `format(${format})`],
    ...[fill && `fill:(${fill})`]
  ] // remove falsy elements

  filters = filters.filter(element => Boolean(element) === true)

  if (filters.length > 0) {
    url += (0, _helpers.applyFilters)(filters)
  } // add original path at the end

  url += `/${originalPath}`
  return url
}

var _default = buildImageUrl
exports.default = _default
