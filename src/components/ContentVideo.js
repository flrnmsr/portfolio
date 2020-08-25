import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { Box } from 'rebass/styled-components'
import { device } from '@styles/utils'

const Wrapper = styled.div`
  margin-bottom: 16px;

  @media ${device.lg} {
    ${props =>
      !props.isGridItem &&
      `
    margin-left: 118px;
    margin-right: 118px; `} /* + 24 outer padding = 142 total */
    margin-bottom: 16px;
  }
`

const VideoWrapper = styled.div`
  margin-bottom: 8px;

  width: 100%;
  height: 100%;
  line-height: 0;

  ${props => props.hasGreyOutline && `border: 1px solid #D6D6D6`};
  ${props => props.hasRoundedCorners && `border-radius: 8px`};
  overflow: hidden;
`

const Video = ({ url, title = false, isGridItem = false }) => {
  const [isPlaying, setPlaying] = useState(false)
  const player = useRef(null)

  return (
    <Wrapper isGridItem={isGridItem}>
      <VideoWrapper
        hasGreyOutline
        hasRoundedCorners
        onClick={() => setPlaying(!isPlaying)}
      >
        <ReactPlayer
          url={url}
          ref={player}
          playing={isPlaying}
          loop
          muted
          // As of Chrome 66, videos must be muted in order to play automatically!
          onReady={() => setPlaying(true)}
          width="100%"
          height="100%"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      </VideoWrapper>

      {title && (
        <Box mt={[8]}>
          <small>{title}</small>
        </Box>
      )}
    </Wrapper>
  )
}

export default Video
