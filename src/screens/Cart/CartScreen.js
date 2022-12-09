import ProductCard from "../../components/ProductCard/ProductCard"
import { priceFormatter } from "../../utils/priceFormatter"
import {
    Box,
    Flex,
} from '@chakra-ui/react';

function CartScreen(props) {
    const {
        cart,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        deleteFromCart
    } = props

    const total = cart.reduce(
        (acc, product) => product.price * product.quantity + acc, 0)

    return (
        <Box>
            <Box color="black" fontWeight={800} fontSize={'xl'} align={'center'} bg='radial-gradient(circle, rgba(220,218,163,1) 60%, rgba(220,218,163,1) 50%, rgba(220,218,163,1) 50%, rgba(214,212,158,1) 70%, rgba(0,0,0,1) 91%)' w='100%' p={4} >
                Valor total do carrinho: {priceFormatter.format(total)}
            </Box>
            <Flex display={"flex"} alignItems="flex-start" gap={"50px"} wrap={"wrap"} justifyContent={"center"} height={"96vh"}>
                {cart.map((product) => (

                    <ProductCard
                        key={product.id}
                        product={product}
                        isOnCartScreen={true}
                        decreaseQuantityInCart={decreaseQuantityInCart}
                        increaseQuantityInCart={increaseQuantityInCart}
                        deleteFromCart={deleteFromCart}
                    />
                ))}

            </Flex>
        </Box>

    )
}

export default CartScreen
