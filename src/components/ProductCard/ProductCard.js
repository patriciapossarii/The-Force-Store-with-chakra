import { priceFormatter } from "../../utils/priceFormatter"
import React from "react";
import iconBuyProduct from "../../assets/iconCart.PNG"
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    Button
} from '@chakra-ui/react';

export default function ProductCard(props) {
    const {
        product,
        addToCart,
        isOnProductsScreen,
        isOnCartScreen,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        deleteFromCart
    } = props

    const IMAGE =
        `https://cdn-cosmos.bluesoft.com.br/products/${product.id}`;


    return (

        <Center py={10} >
            <Box
                w={'250px'}
                h={'350px'}
                cursor="pointer"
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
                padding={"20px"}
                _hover={{
                    transform: "scale(1.1)",
                    transition: "all .4s ease"
                }}>
                <Box
                    align={'center'}
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'200px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: '140px',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        bg: "gray",
                        filter: 'blur(30px)',
                        zIndex: -4,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        align={'center'}
                        rounded={'lg'}
                        h={"150px"}
                        w={"150px"}
                        objectFit={'cover'}
                        src={IMAGE}
                    />
                </Box>
                <Stack top={"120px"} align={'center'}>
                    <Stack direction={'row'} align={'center'} >
                        <Text fontWeight={500} fontSize={'17px'} align={'center'}  >
                            {product.name.english}
                        </Text>
                    </Stack>

                    <Heading fontSize={'1xl'} fontFamily={'body'} fontWeight={450} align={'center'}>
                        Valor unitario: {priceFormatter.format(product.price)}
                    </Heading>

                    <Stack >
                        {isOnProductsScreen &&
                            <Button bg={"black"} colorScheme="black" position={"absolute"} top={"300px"} right={"10px"} onClick={() => addToCart(product)}><img src={iconBuyProduct} width={"30px"} height={"30px"} /></Button>
                        }
                    </Stack>

                    <Flex>
                        {isOnCartScreen && <span> Quant :   </span>}
                        {isOnCartScreen && product.quantity > 1
                            && <Button onClick={() => decreaseQuantityInCart(product)}> - </Button>
                        }

                        {isOnCartScreen &&
                            <Box width={"30px"} display={"flex"} alignItems={"center"} justifyContent={"center"}> {product.quantity}</Box>}

                        {isOnCartScreen
                            && <Button onClick={() => increaseQuantityInCart(product)}> + </Button>
                        }

                        {isOnCartScreen
                            && <Button
                                colorScheme="red"
                                onClick={() => deleteFromCart(product)}
                            >
                                x
                            </Button>}
                    </Flex>
                </Stack>
            </Box>
        </Center>
    );
}