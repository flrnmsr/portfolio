import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
  span {
    display: block;
    margin-bottom: 24px;

    :last-child {
      margin-bottom: 0;
    }
  }
`

const Introduction = ({ text }) => {
  return (
    <display>
      <Wrapper>
        {text.split('\n').map((text,i) => (
          <span key={i}>{text}</span>
        ))}
      </Wrapper>
    </display>
  )
}

export default Introduction
