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
          <Text color="cyan">Hello, {name} </Text>
          <Text color="cyan">I'm </Text>
          <Text bold color="white" backgroundColor="cyan">
            Grayash
          </Text>
        </Box>
        <Box marginBottom={1} flexDirection="column" alignItems="center">
          <Text>
            <Text color="magentaBright">[UMOH]</Text>
            <Text color="magenta"> Frontend Developer at Splab</Text>
          </Text>
          <Text>
            <Text color="redBright">[AUSG]</Text>
            <Text color="red"> 7th Member & 8th Co-Organizer</Text>
          </Text>
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
            <Text underline={true}> https://www.grayash.engineer</Text>
          </Text>
        </Box>
      </Box>
    </>
  );
}
