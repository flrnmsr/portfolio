import React from 'react'
import Layout from '@components/Layout'
import Section from '@components/Section'

import ContentGrid from '@components/ContentGrid'
import ContentImage from '@components/ContentImage'
import ContentParagraph from '@components/ContentParagraph'
import FluidImage from '@atoms/FluidImage'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'
import ContentVideo from '@components/ContentVideo'

import { device } from '@styles/utils'

const WhiteSpace = styled.div`
  margin-bottom: 64px;

  @media ${device.lg} {
    margin-bottom: 128px;
  }
`

const Mobile = styled.nav`
  @media ${device.md} {
    display: none;
  }
`

const Desktop = styled.nav`
  display: none;

  @media ${device.md} {
    display: block;
  }
`

const RoundIcon = styled.span`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
  background-color: #25dd13;
  margin-bottom: 0px;

  margin-right: 6px;
  @media ${device.md} {
    margin-right: 6px;
    margin-left: 2px;
  }
`

class StoryblokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null
    }

    return StoryblokEntry.prepareStory(props)
  }

  static prepareStory(props) {
    const story = Object.assign({}, props.pageContext.story)
    story.content = JSON.parse(story.content)

    return { story, label: props.pageContext.label }
  }

  constructor(props) {
    super(props)
    this.state = StoryblokEntry.prepareStory(props)
  }

  render() {
    let {
      title,
      role,
      url,
      isOnline,
      heroImage,
      heroImageXS,
    } = this.state.story.content
    let { content } = this.state.story
    let { label } = this.state

    return (
      <Layout>
        <Section title={label} pb={[48, 48, 48, 80]} mt={[16]}>
          <Box width={[1, 1, 1, 11 / 12]}>
            <Box pb={[24, 24, 24, 40]}>
              <h1>{title}</h1>
            </Box>
            <Box pb={[12, 12, 16, 10]}>
              <p>My role: {role}</p>
            </Box>

            {isOnline && (
              <Box>
                <RoundIcon />
                <a href={{ display: 'inline-block' }} class="class1">{url}</a>
              </Box>
            )}
          </Box>
        </Section>
        <Desktop>
          {heroImage && (
            <Box mb={[16, 16, 16, 40]} style={{ boxShadow: '0px -1px rgba(0, 0, 0, 0)', }}>
              <FluidImage
                imgUrl={heroImage}
                alt=""
                style={{
                  backgroundColor: 'red',
                  width: '100%',
                  height: 'auto',
                  // marginBottom: '40px',
                }}
                maxWidth={1200} //@ask or @lookup: whats the max width here ?
              />
            </Box>
          )}
        </Desktop>
        <Mobile>
          {heroImageXS && (
            <Box mb={[16, 16, 16, 40]} style={{ boxShadow: '0px -1px rgba(0, 0, 0, 1)', }}>
              <FluidImage
                imgUrl={heroImageXS}
                alt=""
                style={{
                  backgroundColor: 'red',
                  width: '100%',
                  height: 'auto',
                  // marginBottom: '40px',
                }}
              />
            </Box>
          )}
        </Mobile>

        <Section>
          {content.content.length > 0 &&
            content.content.map((item, i) => {
              switch (item.component) {
                case 'project-image-component':
                  return <ContentImage item={item} key={i} />
                case 'project-text-component':
                  return <ContentParagraph item={item} key={i} />
                case 'project-video-component':
                  return (
                    <ContentVideo url={item.asset} title={item.title} key={i} />
                  )
                case 'project-grid-component':
                  return <ContentGrid items={item.items} key={i} />
                default:
                  return null
                // console.log('Error; Item neither Image / Text / Video')
              }
            })}
          <WhiteSpace />
        </Section>
      </Layout>
    )
  }
}

export default StoryblokEntry
