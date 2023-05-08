'use client'
import React from 'react'
import { Heading, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import YellowPulseText from '@/framer/text';

function Header() {
  return (
    <Heading
      size="2xl"
      textAlign="center"
      position="sticky"
      top={0}
      bg="white"
      zIndex={1}
      pt={2}
      pb={2}
    >
      <Box>
        Yellow
        <YellowPulseText >
          hi
        </YellowPulseText>
      </Box>
    </Heading>
  );
}

export default Header