import React from 'react'
import arrowBigIcon from '@assets/icons/arrow-big.svg'
import styled from 'styled-components'
import { device } from '@styles/utils'

const Wrapper = styled.div`
  margin-bottom: 40px;

  @media ${device.lg} {
    margin-bottom: 64px;
  }

`

const SocialLinks = ({ linksList }) => {
  return (
    <Wrapper>
      {linksList.map(item => (
        <h2 key={item.name}>
          <a href={item.isEmail ? `mailto:${item.link}` : item.link}>
            <img src={arrowBigIcon} alt="" style={{ marginRight: '10px' }} />
            {item.name}
          </a>
        </h2>
      ))}
    </Wrapper>
  )
}

export default SocialLinks
