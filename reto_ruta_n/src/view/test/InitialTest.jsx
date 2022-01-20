//Vista de la pregunta inicial, ¿Tienes conocimientos en programación?
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Box, Text, Image } from '@chakra-ui/react';


const InitialTest = () => {
    const navigate = useNavigate();
    return (
        <>

            <Flex bg='#00028A' direction='column' alignItems='center' h='100vh' justifyContent='space-evenly'  >
                <Box maxW={'50%'} minW={'300px'} w='90%' h='250px' bg='white' borderWidth='1px' borderRadius='lg' mt='50px'>

                    <Text fontWeight='bold' as='h5' size='md' margin='20px' textAlign={'center'} marginTop={'50px'}>
                        ¿Tienes conocimientos en programación?
                    </Text >

                    <Flex justifyContent='space-around' marginTop={'20px'}>
                        <Button w='30%' bg='#00028A' boxShadow='lg' p='6' rounded='lg' fontSize='16px' size='lg' color='white' onClick={() => navigate('/TestProgrammer')}>SI</Button>
                        <Button w='30%' fontSize='16px' boxShadow='lg' p='6' rounded='lg' borderWidth='1px' borderColor='#00028A' size='lg' onClick={() => navigate('/TestUser')} >NO</Button>
                    </Flex>
                </Box>
                <Box>
                    <Button as='h1' bg='#FFDF37' fontSize='18px' size='lg' color='#735300' onClick={() => navigate('/Home')}> Regresar </Button>
                </Box>
            </Flex>
        </>
    );
};
export default InitialTest;