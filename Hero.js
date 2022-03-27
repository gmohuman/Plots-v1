import { Heading, Text, Stack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Stack>
      <Heading
        size="4xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
        fontWeight="bold"
        p={2}
        w="70%"
        textAlign="center"
      >
        The first IRL community garden built on Web3.
      </Heading>
      <Text
        p={4}
        textAlign="center"
        color="gray.600"
        fontSize="20px"
        fontWeight="medium"
        w="50%"
        alignItems="left"
      >
        Grow, harvest, collect, and share as a part of a dynamic cooperative--all through Lens Protocol 
      </Text>
    </Stack>
  );
};

export default Hero;