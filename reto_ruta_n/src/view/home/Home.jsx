import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Box, Heading, Text ,Image} from '@chakra-ui/react';
import estiloazul from "../../img/estilo-azul.png";
import {signOuts} from "../../firebase/firebase.js"
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Flex bg='#00028A' direction='column' alignItems='center' h='100vh' justifyContent='space-evenly' >
                <Flex justifyContent={'left'}>
                    <Image src={estiloazul} alt='estiloazul' margin='45px' w='35%' />
                </Flex>
                
                <Box color='white' w='90%'>
                    <Flex w='100%' justifyContent='center'>
                        <Heading as='h3' size='lg' margin='20px'>
                            Hola
                        </Heading >
                    </Flex>
                    <Flex w='100%' justifyContent='center'>
                        <Text fontSize='18px' marginLeft='18px'>
                            Con este test tendrás al alcance de tu mano nuestras sugerencias para formarte como talento en el área de tecnología.
                        </Text>
                    </Flex>
                </Box>
                <Flex direction='column' h='150px' justifyContent='space-around'>
                    <Button as='h1' bg='#FFDF37' fontSize='18px' size='lg' color='#735300' onClick={() => navigate('/InitialTest')}>Realizar test</Button>
                </Flex>
            </Flex>
        </>
    );
};
export default Home;