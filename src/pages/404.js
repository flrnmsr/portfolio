import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { navigate } from '@reach/router'

const NotFoundPage = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <Layout>
      <small>Redirecting</small>
    </Layout>
  )
}

export default NotFoundPage
