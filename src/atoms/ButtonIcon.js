import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const ButtonIcon = styled.div`
  border-radius: 50%;
  width: 38px;
  height: 38px !important;
  padding: 0;

  color: ${props => props.theme.color.black};
  outline: none;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0);

  background-color: rgba(220, 220, 225, 0.92);


  /* if backdrop support: very transparent and blurred */
  /*@supports ((backdrop-filter: blur(2em))) {
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }*/

  margin-right: 4px;

  border: none;
`

export default ({ to, children }) => {
  return (
    <AnchorLink to={to}>
      <ButtonIcon>{children}</ButtonIcon>
    </AnchorLink>
  )
}
