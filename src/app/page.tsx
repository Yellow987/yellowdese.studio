'use client'
import Image from 'next/image';
import Test from '../markdown/test.mdx';
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import ThreeColumn from './../components/threeColumn';
import UnderConstruction from '@/components/underConstruction';

export default function Home() {

  return (
    <>
      <Box style={{ width: "100%", height: "500px", minHeight: "500px", position: "relative" }} >
        <Image
          src="/images/YellowVRC_3.png"
          alt="My Image"
          fill
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
          quality={100}
        />  
      </Box>
      <UnderConstruction size={100} />
      <ThreeColumn />
    </>
  );
}
