'use client'
import React from 'react'
import Link from 'next/link'
import tw from 'twin.macro'
import Container from '@/components/common/container'
import MainVisual from '@/components/main/mainVisual'
import Product from '@/components/main/product'
import Report from '@/components/main/report'
import Whyus from '@/components/main/whyus'
import Faq from '@/components/main/faq'
import Contact from '@/components/main/contact'

const styles = {
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Home = () => (
  <Container>
    <MainVisual />
    <Product />
    <Report />
    <Whyus />
    <Faq />
    <Contact />
  </Container>
)

export default Home
