import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { device } from '@styles/utils'


const Button = styled.button`
  margin-left: 0;
  margin-right: 1px;
  padding: 8px 12px 6px 12px;
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
    padding: 8px 12px 6px 12px;
    font-size: 16px;
    line-height: 18px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: 0px;



  	}

  }
`

export default ({ to, children }) => {
  return (
    <AnchorLink to={to}>
      <Button>{children}</Button>
    </AnchorLink>
  )
}
