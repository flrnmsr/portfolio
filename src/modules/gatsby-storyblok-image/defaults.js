exports.__esModule = true
exports.defaultFixedOptions = exports.defaultFluidOptions = exports.defaultOptions = exports.sizeMultipliersFluid = exports.sizeMultipliersFixed = exports.STORYBLOK_BASE_URL = exports.DEFAULT_FLUID_MAX_WIDTH = exports.DEFAULT_FIXED_WIDTH = void 0
const DEFAULT_FIXED_WIDTH = 400
exports.DEFAULT_FIXED_WIDTH = DEFAULT_FIXED_WIDTH
const DEFAULT_FLUID_MAX_WIDTH = 800
exports.DEFAULT_FLUID_MAX_WIDTH = DEFAULT_FLUID_MAX_WIDTH
const STORYBLOK_BASE_URL = 'https://img2.storyblok.com'
exports.STORYBLOK_BASE_URL = STORYBLOK_BASE_URL
const sizeMultipliersFixed = [1, 1.5, 2, 3]
exports.sizeMultipliersFixed = sizeMultipliersFixed
const sizeMultipliersFluid = [0.25, 0.5, 1, 1.5, 2, 3]
exports.sizeMultipliersFluid = sizeMultipliersFluid
const defaultOptions = {
  quality: 100,
  smartCrop: true,
  format: null,
  fill: null,
  toFormat: null,
  base64: null,
  useBase64: true
}
exports.defaultOptions = defaultOptions
const defaultFluidOptions = Object.assign({}, defaultOptions, {
  maxWidth: DEFAULT_FLUID_MAX_WIDTH,
  maxHeight: null
})
exports.defaultFluidOptions = defaultFluidOptions
const defaultFixedOptions = Object.assign({}, defaultOptions, {
  width: DEFAULT_FIXED_WIDTH,
  height: null
})
exports.defaultFixedOptions = defaultFixedOptions
