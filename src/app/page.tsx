'use client'
import Container from '@/components/common/container'
import React from 'react'
import tw from 'twin.macro'

const styles = {
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Home = () => (
  <Container>
    <h1>Hello</h1>
  </Container>
)

export default Home
