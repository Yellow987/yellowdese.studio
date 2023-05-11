'use client'
import Image from 'next/image';
import Test from '../markdown/test.mdx';
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import React from 'react';
import { Box } from '@chakra-ui/react';

export default function Home() {
  React.createElement(Test)


  return (
    <>
      hello world
      <Box style={{ width: "100%", height: "500px", minHeight: "500px", position: "relative" }} >
        <Image
          src="/YellowVRC_2.png"
          alt="My Image"
          fill
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
          quality={100}
        />  
      </Box>
      end
      <Prose>
        <Test />
      </Prose>
    </>
  );
}
