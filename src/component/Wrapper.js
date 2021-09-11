import { Box, Center, Stack, useColorModeValue } from "@chakra-ui/react";

const Wrapper = (props) => {
  return (
    <Center py={6} w="100vw" h="100vh">
      <Box
        maxW={"50vw"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>{props.children}</Stack>
      </Box>
    </Center>
  );
};

export default Wrapper;
