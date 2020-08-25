import FunktionalGroteskBook1 from '@assets/fonts/FunktionalGrotesk-Book.woff'
import FunktionalGroteskBook2 from '@assets/fonts/FunktionalGrotesk-Book.woff2'

import FunktionalGroteskLight1 from '@assets/fonts/FunktionalGrotesk-Light.woff'
import FunktionalGroteskLight2 from '@assets/fonts/FunktionalGrotesk-Light.woff2'

export default `
  @font-face {
    font-family: 'Grotesk-Book';
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
    src: url(${FunktionalGroteskBook2}) format('woff2'),
      url(${FunktionalGroteskBook1}) format('woff');
  }

  @font-face {
    font-family: 'Grotesk-Light';
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
    src: url(${FunktionalGroteskLight2}) format('woff2'),
      url(${FunktionalGroteskLight1}) format('woff');
  }
`
