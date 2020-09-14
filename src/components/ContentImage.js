import React from 'react'
import styled from 'styled-components'
import FluidImage from '@atoms/FluidImage'
import { Box } from 'rebass/styled-components'
import { device } from '@styles/utils'


const ImageWrapper = styled.div`
  margin-bottom: 8px;

`
const Wrapper = styled.div`
  margin-bottom: 24px;

  @media ${device.lg} {
    margin-bottom: 24px;

    ${props => !props.isGridItem &&
    `
    margin-left: 118px;
    margin-right: 118px;
    `
    }

  }
`

const ContentImage = ({ item, isGridItem = false }) => {
  return (
    <Wrapper isGridItem={isGridItem} >
      {item && (
        <ImageWrapper>
        <FluidImage
          blok={item}
          imgUrl={item.image}
          alt=""
          hasGreyOutline={item.hasGreyOutline} hasRoundedCorners={item.hasRoundedCorners}
          isGridItem={isGridItem}
        />
        </ImageWrapper>
      )}

      {item.title && (
        <Box mt={[8]} >
          <small>{item.title}</small>
        </Box>
      )}
    </Wrapper>
  )
}

export default ContentImage
