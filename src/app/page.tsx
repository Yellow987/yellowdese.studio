'use client'
import Image from 'next/image';
import Test from '../markdown/test.mdx';
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import React from 'react';

export default function Home() {
  React.createElement(Test)


  return (
    <>
      
      hello world
      <Image src="/YellowVRC_1.png" alt="My Image" width={500} height={500} />
      end
      <Prose>
        <Test />
      </Prose>
      
    </>
  )
}
