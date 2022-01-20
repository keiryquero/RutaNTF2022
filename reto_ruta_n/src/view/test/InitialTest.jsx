//Vista de la pregunta inicial, ¿Tienes conocimientos en programación?
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Box, Image, Heading, Text } from '@chakra-ui/react';
import { FaChevronLeft } from "react-icons/fa";
const InitialTest = () => {
    const navigate = useNavigate();
    return (
        <>
            <Flex bg='#00028A' direction='column' alignItems='center' h='100vh' justifyContent='center'  >
                <Flex margin='10px'>
                    < FaChevronLeft color='white' w='10px'/>
                </Flex>
                <Flex direction='column' justifyContent='space-evenly' w='90%' h='250px' bg='white' borderWidth='1px' borderRadius='lg'>

                    <Heading as='h4' size='md' margin='20px'>
                        ¿Tienes conocimientos en programación?
                    </Heading >

                    <Flex justifyContent='space-around'>
                        <Button w='30%' bg='#00028A' boxShadow='lg' p='6' rounded='lg' fontSize='16px' size='lg' color='white' onClick={() => navigate('/TestProgrammer')}>SI</Button>
                        <Button w='30%' fontSize='16px' boxShadow='lg' p='6' rounded='lg' borderWidth='1px' borderColor='#00028A' size='lg' onClick={() => navigate('/TestUser')} >NO</Button>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};
export default InitialTest;