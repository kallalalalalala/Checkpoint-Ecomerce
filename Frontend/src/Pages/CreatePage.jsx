import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  VStack,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

export function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });
  const toast  = useToast()

  const { createProducts } = useProductStore();
  

  const handleSubmit = async () => {
    const result = await createProducts(newProduct); 
    if (result.success) {
      toast({
        title: "BIEN FAIT",
        description: "Le produit a été créé avec succès!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setNewProduct({
        name: "",
        price: "",
        image: "",
        description: "",
      });
    } else {
      toast({
        title: "ERREUR",
        description: "Veuiller remlire tous les champ ",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error(result.Message);
    }
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8} />
      <Heading as={"h2"} size={"2xl"} textAlign={"center"} mb={"8"}>
        Create a new product
      </Heading>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        p={7}
        rounded={"lg"}
        shadow={"md"}
      >
        <VStack spacing={8}>
          <Input
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />

          <Input
            placeholder="Enter product price"
            name="price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />

          <Input
            placeholder="Enter Image Url"
            name="image"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />

          <Input
            placeholder="enter product description"
            name="description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          />

          <Button
            onClick={handleSubmit}
            size="md"
            height="48px"
            width="200px"
            colorScheme="cyan"
            fontWeight="semibold"
          >
            Enregistrer
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}
