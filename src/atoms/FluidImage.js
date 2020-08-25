import React from 'react'
import SbEditable from 'storyblok-react'
import Img from 'gatsby-image'
import styled from 'styled-components'

// Using a copy of the plugin here (gatsby-storyblok-image),
// since there were problems with the query syntax in the original plugin
import {
  getFluidGatsbyImage,
} from '../modules/gatsby-storyblok-image'



const Wrapper = styled.div`
  /* margin-bottom: 16px; */

  ${props => props.hasGreyOutline && `border: 1px solid #D6D6D6`};
  ${props => props.hasRoundedCorners && `border-radius: 8px`};
  overflow: hidden;
`

const FluidImage = ({ imgUrl, maxWidth = 1156, hasGreyOutline, hasRoundedCorners, isGridItem = false, ...rest }) => {

  if(isGridItem) {
    maxWidth = maxWidth / 2;
  }

  const fluidProps = getFluidGatsbyImage(imgUrl, {
    // maxWidth: 566,
    maxWidth: maxWidth,
    quality: 100,
  })

  return (
    <Wrapper hasGreyOutline={hasGreyOutline} hasRoundedCorners={hasRoundedCorners}>
    <SbEditable content={imgUrl}>
      <Img
        fluid={fluidProps}
        // imgStyle={{ objectFit: 'cover', width: '100%', height: '100%' }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
        }}
      />
    </SbEditable>
    </Wrapper>
  )
}

export default FluidImage
