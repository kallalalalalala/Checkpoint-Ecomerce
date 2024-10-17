import { Container, Flex ,Text,Button, HStack, useColorMode} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="1140px" p={9}>
      <Flex
      h={17}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base: "column",
        md: "row"
      }}
      >
        <Text
    fontSize={{base: "22",sm :"28"}}
    fontWeight={"bold"}
    textTransform={"uppercase"}
    textAlign={"center"}
    bgGradient={"linear(to-r ,cyan.400,blue.100,purple.400)"}
    bgClip={"text"}
>
  <Link to={"/"}>Product Store 🛒🛍️</Link>
</Text>
        <HStack spacing={4}>
          <Link to = {"/create"}>
          <Button>
            <FaPlus />
          </Button>
          </Link>
      <Button onClick={toggleColorMode} >
        {colorMode === "light"? "🌙" : "💡"}
          </Button>
           </HStack>

      </Flex>
    </Container>
  );
}