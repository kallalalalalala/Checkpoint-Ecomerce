import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "./ProductCard";


const HomePage = () => {
	const { fetchProduct, product } = useProductStore();

	useEffect(() => {
		fetchProduct();
	}, [fetchProduct]);

	return (
		<Container maxW='container.xl' py={4}>
			<VStack spacing={8}>
				<Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Current Products 🚀
				</Text>

				<SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"x"}
				>
					{Array.isArray(product) && product.length > 0 ? (
						product.map((item) => (
							<ProductCard key={item._id} product={item} />
						))
					) : (
						<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
							No products found 😢{" "}
							<Link to={"/create"}>
								<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
									Create a product
								</Text>
							</Link>
						</Text>
					)}
				</SimpleGrid>
			</VStack>
		</Container>
	);
};

export default HomePage;
