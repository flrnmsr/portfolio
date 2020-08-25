import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass/styled-components'
import { device } from '@styles/utils'


const ParagraphWrapper = styled.span`
  p {
    display: block;
    margin-bottom: 16px;

    :last-child {
      margin-bottom: 0;
    }
  }
`

const Wrapper = styled.div`
  padding-top: 56px;
  padding-bottom: 24px;

  @media ${device.lg} {
    padding-top: 96px;
    padding-bottom: 64px;
  }
`

const ContentParagraph = ({ item }) => {
  return (
    <Wrapper>
      <Box width={[1, 1, 1, 6 / 12]}>
        {item.title && (
          <Box mb={[16, 16, 16, 24]}>
            <h2>{item.title}</h2>
          </Box>
        )}

        <ParagraphWrapper>

        {item.text.split('\n').map((text,i) => (
          <p key={i}>{text}</p>
        ))}

        </ParagraphWrapper>
      </Box>
    </Wrapper>
  )
}

export default ContentParagraph
