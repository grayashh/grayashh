import React from 'react';
import { Box, Text } from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

export default function App({ name }: { name: string }) {
  return (
    <>
      <Gradient name="instagram">
        <BigText text="Grayash" align="center" />
      </Gradient>
      <Box borderStyle="single" padding={2} flexDirection="column" alignItems="center">
        <Box marginBottom={1} alignItems="center">
          <Text color={'magenta'}>Hello, {name} </Text>
          <Text color={'magentaBright'}>I'm </Text>
          <Text bold={true} color={'white'} backgroundColor={'magenta'}>
            Grayash
          </Text>
        </Box>
        <Box marginBottom={1} flexDirection="column" alignItems="center">
          <Text color="grey">Front-End Engineer</Text>
          <Text color="grey">TypeScript, React, React Native, Next.js</Text>
        </Box>
        <Box flexDirection="column" marginBottom={1} alignItems="center">
          <Text>
            <Text backgroundColor="whiteBright" color="black" underline={false}>
              GitHub
            </Text>
            <Text underline={true}> https://github.com/grayashh</Text>
          </Text>
          <Text>
            <Text backgroundColor="whiteBright" color="black" underline={false}>
              Homepage
            </Text>
            <Text underline={true}> https://grayash.tech</Text>
          </Text>
        </Box>
      </Box>
    </>
  );
}
