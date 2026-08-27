// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Olivia">
      <p>I like weightlifting, cats, music, nails, thrifting, and coffee!</p>
    </Layout>
  )
}
export const Head = () => <Seo title="About Olivia!" />

// Step 3: Export your component
export default AboutPage