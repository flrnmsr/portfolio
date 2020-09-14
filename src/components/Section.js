import React from 'react'
import styled, { css } from 'styled-components'
import { Box } from 'rebass/styled-components'

import { device } from '@styles/utils'

const StyledSection = styled(Box)`
  position: relative;
  ${props => props.takeViewportHeight && `min-height: calc(100vh - 16px);`}
`

const reset = css`
  margin: 0;
  font-weight: normal;
  text-decoration: none;
  writing-mode: vertical-rl;
  text-orientation: upright;
`

const Title = styled.h1`
  display: none;

  @media ${device.lg} {
    ${reset}
    display: block;
    position: absolute;
    top: 0;
    right: 12px;

    color: rgba(255, 255, 255, 0.2);
    font-family: ${props => props.theme.font.book};

    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.12px;


    writing-mode: vertical-rl;
  -webkit-text-orientation: sideways;
  text-orientation: sideways;

  }
`

const Content = styled(Box)`
  padding: 0 16px 0 16px;
  @media ${device.lg} {
    padding: 0 24px 0 24px;
  }
`

const Section = ({ children, title, pb, mt, ...rest }) => {
  return (
    <StyledSection {...rest} pb={pb} mt={mt}>
      <Content>{children}</Content>
      <Title>{title}</Title>
    </StyledSection>
  )
}

export default Section
