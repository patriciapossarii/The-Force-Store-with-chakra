import productIcon from "../../assets/home2.png"
import cartIcon from "../../assets/iconCart.PNG"
import logotipo from '../../assets/logo.png'
import {
    Input,
    NumberInput,
    Box,
    Flex,
    Image,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,  
    Select, 
    Spacer
} from '@chakra-ui/react'


function Header(props) {
    const { goToCartScreen,
        goToProductsScreen,
        filterText,
        onChangeFilterText,
        orderByName,
        selectSide,
        orderByPrice,
        lowPrice,
        highPrice,
        itemsInCart,
    } = props


    const sideForceArray = [
        "Light",
        "Dark"];

    const onChangeOrderByName = (e) => {
        props.setOrderByName(e.target.value)
    }

    const onChangeOrderByPrice = (e) => {
        props.setOrderByPrice(e.target.value)
    }


    const onChangeSelectSide = (e) => {
        props.setSelectSide(e.target.value)
    }

    const onChangeLowPrice = (e) => {
        props.setLowPrice(e.target.value)
    }

    const onChangehighPrice = (e) => {
        props.setHighPrice(e.target.value)
    }

    return (
        <Box resetCSS bg={"black"} w={"100vw"} padding={"10px"}>
            <Box>
                <Image src={logotipo} maxW={"50%"}
                    maxH={"40%"}
                    margin={0}
                />

                <Box >
                    <Flex display={"flex"} justifyContent={"flex-end"}>
                        <Button onClick={goToProductsScreen} colorScheme="black" marginTop={"42px"}
                        >
                            <img src={productIcon} H={"60px"} width={"60px"} />
                        </Button>

                        <Button onClick={goToCartScreen} colorScheme="black" marginTop={"42px"}>
                            <img src={cartIcon} H={"45px"} width={"45px"} />
                            {
                                itemsInCart > 0
                                && <Spacer display="flex" justifyContent="flex-end" >{itemsInCart}</Spacer>
                            }
                        </Button>
                    </Flex>
                </Box>
            </Box>

            <Flex
                padding={"30px"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"} margin-top={"16px"} margin-bottom={"16px"}>
                <Box>
                    <Input placeholder='Buscar por nome'
                        value={filterText}
                        onChange={onChangeFilterText}
                        textColor="white" borderColor={"yellow"} borderWidth={"2px"}
                    />
                </Box>

                <Box>
                    <Select value={orderByName} onChange={onChangeOrderByName} textColor="white" borderColor={"yellow"} borderWidth={"2px"}>
                        <option value="" style={{ color: 'black' }}>Ordenar Itens por Nome</option>
                        <option value="crescente" style={{ color: 'black' }} >Crescente</option>
                        <option value="decrescente" style={{ color: 'black' }}>Decrescente</option>
                    </Select>
                </Box>

                <Box >
                    <Select value={orderByPrice} onChange={onChangeOrderByPrice} textColor="white" borderColor={"yellow"} borderWidth={"2px"} >
                        <option value="" style={{ color: 'black' }} >Ordenar Preço</option>
                        <option value="menor" style={{ color: 'black' }}>Crescente</option>
                        <option value="maior" style={{ color: 'black' }}>Decrescente</option>
                    </Select>
                </Box>

                <Box>
                    <NumberInput min={1}>
                        <NumberInputField placeholder="Valor Mínimo"
                            value={lowPrice}
                            onChange={onChangeLowPrice}
                            textColor="white" borderColor={"yellow"} borderWidth={"2px"} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Box>

                <Box>
                    <NumberInput min={1}>
                        <NumberInputField type="number"
                            placeholder="Valor Máximo"
                            value={highPrice}
                            onChange={onChangehighPrice}
                            textColor="white" borderColor={"yellow"} borderWidth={"2px"}
                        />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>

                </Box>

                <Box>
                    <Select
                        name="tipo"
                        id="tipo"
                        value={selectSide}
                        onChange={onChangeSelectSide}
                        textColor="white" borderColor={"yellow"} borderWidth={"2px"} >

                        <option value="" style={{ color: 'black' }}>Escoher um lado da Força</option>
                        {sideForceArray.map((type) => {
                            return (
                                <option style={{ color: 'black' }} key={type} value={type}>
                                    {type}

                                </option>
                            );
                        })}
                    </Select>
                </Box>

            </Flex>

        </Box >
    )
}

export default Header
