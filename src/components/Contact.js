import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
  span {
    display: block;
    margin-bottom: 24px;
  }

`

const Contact = ({ text }) => {
  return (
    <h2>
      <Wrapper>
        {text.split('\n').map((text,i) => (
          <span key={i}>{text}</span>
        ))}
      </Wrapper>
    </h2>
  )
}

export default Contact
