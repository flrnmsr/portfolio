import React from 'react'
import styled from 'styled-components'
import { device } from '@styles/utils'

const Credits = ({ text }) => {
  return (
    <>
      {text.split('\n').map((text, i) => (
        <div>
          <small key={i}>{text}</small>
        </div>
      ))}
    </>
  )
}

export default Credits
