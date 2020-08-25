exports.__esModule = true
exports.default = void 0
const validImageUrlPattern = /^\/\/a.storyblok.com\/f\/[0-9]+\/[0-9]+x[0-9]+\/[A-Za-z0-9]+\/[\S]+\.[a-z]+/

function getBasicImageProps(image) {
  let url = null
  let lqip = null

  if (typeof image === 'string') {
    url = image
  }

  if (typeof image === 'object') {
    url = image.image
    lqip = image.base64 ? image.base64 : null
  }

  url = validImageUrlPattern.test(url) ? url : null

  if (!url) {
    return false
  }

  let originalPath = url.replace('//a.storyblok.com/', '')

  let _originalPath$split = originalPath.split('/'),
    dimensions = _originalPath$split[2],
    filename = _originalPath$split[4]

  let _dimensions$split$map = dimensions.split('x').map(num => parseInt(num, 10)),
    width = _dimensions$split$map[0],
    height = _dimensions$split$map[1]

  let _filename$split = filename.split('.'),
    extension = _filename$split[1]

  let aspectRatio = width / height
  let metadata = {
    dimensions: {
      width,
      height,
      aspectRatio
    },
    lqip
  }
  return {
    originalPath,
    extension,
    metadata
  }
}

var _default = getBasicImageProps
exports.default = _default
