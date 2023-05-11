import React from "react";
import { Box, useTheme, Text  } from "@chakra-ui/react";
import { css, keyframes } from '@emotion/react';

type Props = {
  children: React.ReactNode;
};

const YellowPulseText = ({ children }: Props) => {
  const theme = useTheme();


  const scroll = keyframes`
  0% { background-position: 100% 0; }
  100% { background-position: 0 0; }
`;

  return (
    <Box
      as="div"
      fontSize="xl"
      fontWeight="bold"
      lineHeight="shorter"
      p={5}
      backgroundImage="linear-gradient(to right, yellow, orange, black, orange, yellow)"
      backgroundSize="200% 200%"
      animation={`${scroll} 2s linear infinite`}
      bgClip="text"
      color="transparent"
    >
      {children}
    </Box>
  );
};

export default YellowPulseText;
