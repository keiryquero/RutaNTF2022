import React from 'react';
import { useNavigate } from 'react-router-dom';
/* import { registerGoogle } from '../../firebase/firebase.js'; */
import { Box, Button, Image, Flex, Heading, Text } from '@chakra-ui/react';
import { userRegister } from '../../firebase/firebase';
import { FcGoogle } from 'react-icons/fc';
import { ImGoogle2 } from "react-icons/im";

import logoBlanco from '../../img/Logo-f-blanco-1.svg';
import {
    GoogleAuthProvider,
    signInWithPopup,
    getAuth
} from 'firebase/auth';

const Login = () => {
    const navigate = useNavigate();

    const registerGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const { user } = result;
            console.log(token, user);
            navigate('/Home')
        })
    };

    return (
        <>
            <Image src={logoBlanco} alt='logoMDT' margin='30px' />
            <Flex direction='column' alignItems='center' h='60vh' justifyContent='space-around'>
                <Box color='#00014e' w='90%' h='250px' borderWidth='1px' borderRadius='lg' p={4} color='white' >
                    <Heading as='h3' size='md' marginTop='15px'>
                        ¡Mide que tan crack eres!
                    </Heading>
                    <Text fontSize='18px' marginTop='20px'>
                        Con nuestro test de habilidades descubre cuales son las rutas de formación IT más adecuadas para ti.
                    </Text>
                </Box>
                <Box>
                    <Heading as='h3' color='#333333' size='md'>
                        Ingresa y realiza tu test
                    </Heading>
                </Box>
                <Button leftIcon={<ImGoogle2 />} colorScheme='teal' bg='#FF600E' fontSize='16px' size='lg' onClick={() => registerGoogle()}>
                    Ingresa con Google
                </Button>


                {/*  <div className='containerLogin'>
                <button
                    type='button'
                    className='btn.login'
                    onClick={() => registerGoogle()}
                >
                    Continua con Google
                </button>
                <p>¿No tienes cuenta?</p>
                <a href='/Register'>Registrate aquí</a>
            </div>
            )
} */}
            </Flex>
        </>
    );
};
export default Login;
