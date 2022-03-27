import {
  Button,
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const GardenCard = () => {
  const IMAGE =
    "https://drscdn.500px.org/photo/1046036109/m%3D900/v2?sig=bcd75302157fab64c8df04cd1c48a02ab07d4ab8b30bd9f446ddeec7e7c6a8f8";

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"300px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"full"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(8px)",
            },
          }}
        >
          <Image
            rounded={"50"}
            height={230}
            width={282}
            objectFit={"fit"}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text>A nice plot, surely</Text>
          <Button>Select</Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default GardenCard;
