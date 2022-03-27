import { Heading, LinkOverlay, SimpleGrid, Image, Box, Text } from "@chakra-ui/react";
const IMAGE =
"https://drscdn.500px.org/photo/1046036109/m%3D900/v2?sig=bcd75302157fab64c8df04cd1c48a02ab07d4ab8b30bd9f446ddeec7e7c6a8f8";
const DiggingDeeper = () => {
  return (

     <SimpleGrid columns={2} spacing={25}>
     <Image
            rounded={"50"}
            height={230}
            width={282}
            objectFit={"fit"}
            src={IMAGE}
          />
<Box><Text>WE CHOSE LENS BECAUSE OF ALL THIS CRAZY SHIT YOU CAN DO WITH IT HANNNN</Text></Box>
</SimpleGrid>
    
  );
};

export default DiggingDeeper;