import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { device } from '@styles/utils'

export default createGlobalStyle`
  ${styledNormalize}


  html, body {
    height: initial;
    background-color: #161616;
    font-family: ${props => props.theme.font.light};
    color: #fff;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.color.black};
  }


  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  display {
    margin: 0;
    font-weight: normal;
    text-decoration: none;

    /* XS h1 */
    font-family: ${props => props.theme.font.light};
    font-size: 32px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.95;
    letter-spacing: normal;

    @media ${device.md} {
      font-family: ${props => props.theme.font.light};
      font-size: 56px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.95;
      letter-spacing: -0.6px;
    }

    @media ${device.lg} {
      font-family: ${props => props.theme.font.light};
      font-size: 64px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.95;
      letter-spacing: -0.6px;
    }

    @media ${device.xl} {
      font-family: ${props => props.theme.font.light};
      font-size: 80px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.95;
      letter-spacing: -0.6px;
    }

  }


  h1 {
    margin: 0;
    font-weight: normal;
    text-decoration: none;

    /* XS h1 */
    font-family: ${props => props.theme.font.light};
    font-size: 32px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.95;
    letter-spacing: normal;

    @media ${device.lg} {
      font-family: ${props => props.theme.font.light};
      font-size: 64px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.95;
      letter-spacing: -0.6px;
    }
  }

  h2 {
  /* XS H2 */
  font-family: ${props => props.theme.font.light};
  font-size: 28px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.4;

  @media ${device.lg} {
    font-family: ${props => props.theme.font.light};
    font-size: 36px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: -0.4;
  }
}

p {
  /* XS: */
  font-family: ${props => props.theme.font.book};
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;

  @media ${device.lg} {
    font-family: ${props => props.theme.font.book};
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
  }
}

a.class1 {
  /* XS: */
  margin-left: 0;
  margin-right: 1px;
  padding: 10px 12px 6px 12px;
  height: 34px;
  font-family: 'Grotesk-Book';
  font-size: 16px;
  line-height: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0px;


  color: ${props => props.theme.color.black};
  background-color: rgba(0, 0, 0, 0.87);
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 22px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0);
  transition: 0.4s;


  @media ${device.md} {
    height: 34px;
    padding: 10px 12px 6px 12px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: 0px;
  }
}

small {
  /* XS P SMALL */
  font-family: ${props => props.theme.font.book};
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 18px;
  letter-spacing: 0.1px;

  @media ${device.lg} {
    font-family: ${props => props.theme.font.book};
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 18px;
    letter-spacing: 0.1px;
  }
}


    ::-moz-selection { /* Code for Firefox */
      color: #bbb;
      background: #000;
    }

    ::selection {
      color: #bbb;
      background: #000;
    }

`
