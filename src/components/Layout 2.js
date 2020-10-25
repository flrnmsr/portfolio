import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import Helmet from 'react-helmet'

import GlobalStyles from '@styles/global'
import theme from '@styles/theme'
import fonts from '@styles/fonts'
import { device } from '@styles/utils'

import Button from '@atoms/Button'
import ButtonIcon from '@atoms/ButtonIcon'

import portfolioIcon from '@assets/icons/portfolio.svg'
import infoIcon from '@assets/icons/info.svg'
import Seo from '@components/Seo'

const Mobile = styled.nav`
  display: flex;
  position: fixed;
  bottom: 16px;
  left: 16px;

  @media ${device.md} {
    display: none;
  }
`

const Desktop = styled.nav`
  display: none;

  @media ${device.md} {
    display: flex;
    position: fixed;
    bottom: 16px;
    left: 16px;
  }
`

const NavDesktop = () => (
  <Desktop>
  <Button to="/#intro">Florian Moser</Button>
  <Button to="/#work">Selected Work</Button>
  <Button to="/#info">Info</Button>
  </Desktop>
)

const NavMobile = () => (
  <Mobile>
  <Button to="/#intro">FM</Button>
  <Button to="/#work">Selected Work</Button>
  <Button to="/#info">Info</Button>
  </Mobile>
)

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div style={{ maxWidth: '3000px', position: 'relative' }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Helmet>
            <style type="text/css">{fonts}</style>
          </Helmet>

          <Seo />

          <main>{children}</main>

          {/* these are conditionally rendered */}
          <NavMobile />
          <NavDesktop />
        </ThemeProvider>
      </div>
    )
  }
}

export default Layout
