import React from 'react';
import { useNavigate } from 'react-router-dom';
/* import { registerGoogle } from '../../firebase/firebase.js'; */
import { Box, Button, Image } from '@chakra-ui/react';
import { userRegister } from '../../firebase/firebase';
import { FcGoogle } from 'react-icons/fc';
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
        <Box>
            <Image src={logoBlanco} alt='logoMDT' />
            <Button leftIcon={<FcGoogle />} colorScheme='teal' size='lg' onClick={() => registerGoogle()}>
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
        </Box>
    );
};
export default Login;
