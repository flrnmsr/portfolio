import React from 'react'
import styled from 'styled-components'
import { device } from '@styles/utils'
import ContentVideo from '@components/ContentVideo'
import ContentImage from '@components/ContentImage'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 16px;
  row-gap: 0px;

  @media ${device.lg} {
    padding: 0 118px;
    grid-template-columns: 1fr 1fr;
  }
`

const Wrapper = styled.div`
  /* margin-bottom: 16px; */
  width: 100%;
  height: 100%;
`

const ContentGrid = ({ items }) => {
  return (
    <Grid>
      {items.map((item, i) => {
        if (item.component === 'project-image-component') {
          return (
            <Wrapper key={i}>
              {item && <ContentImage item={item} isGridItem={true} />}
            </Wrapper>
          )
        }
        if (item.component === 'project-video-component') {
          return (
            <Wrapper key={i}>
              <ContentVideo url={item.asset} title={item.title} isGridItem />
            </Wrapper>
          )
        }
        return null
      })}
    </Grid>
  )
}

export default ContentGrid
