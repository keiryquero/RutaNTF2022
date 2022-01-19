import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from '@chakra-ui/react';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <h3>Hola </h3> 
            <p>¿Qué te gustaría hacer?</p>

            <section className='sect-btn-home'>
                <Button onClick={() => navigate('/InitialTest')}>Realizar test</Button>
                <Button onClick={() => navigate('/')} >Resultados test anteriores</Button>
            </section>
        </>
    );
};

export default Home;