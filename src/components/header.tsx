'use client'
import React from 'react'
import { Heading, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import YellowPulseText from '@/effects/text';
import { WEBSITE_NAME } from '@/config/constants';

function Header() {
  return (
    <Box
      textAlign="center"
      position="sticky"
      top={0}
      bg="white"
      zIndex={1}
      pt={0}
      pb={0}
    >
      <YellowPulseText >
        <Heading as="h1" size="xl">
          {WEBSITE_NAME}
        </Heading>
      </YellowPulseText>
    </Box>
  );
}

export default Header