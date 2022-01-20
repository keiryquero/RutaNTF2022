import React from "react";
import { useEffect, useState } from "react";
import CourseList from "./CourseList";
import { useNavigate } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Button,
    Heading
} from "@chakra-ui/react";

const Results = ({ path }) => {
    console.log('path', path)
    const navigate = useNavigate();

    const [data, setDataState] = useState([]);
    //console.log(data);
    const getData = () => {
        fetch("data.json")
            .then((products) => products.json())
            .then((data) => setDataState(data));
    };

    useEffect(() => {
        getData();
    }, []);

    const filterRoute = path.flatMap(item => data.filter(route => route.ruta.includes(item)));

    return (
        <div>
            <Flex bg='#00028A' direction='column' h='100vh' justifyContent='space-evenly'>
                <Flex justifyContent='center'>

                    <Heading as='h3' size='lg' margin='20px' color='white'>

                        Estos son tus resultados
                    </Heading >
                </Flex>
                {filterRoute.map((route) => (
                    <div key={route.id}>
                        <Flex bg='#00028A' direction='column' alignItems='center' justifyContent='center' >
                            <Accordion allowToggle bg='#E5E5E5' w='85%' justifyContent='center' rounded='10px' position="relative" >
                                <AccordionItem boxShadow='lg' rounded='10px' borderWidth='1px'>
                                    <h2>
                                        <AccordionButton>
                                            <Flex flex="1" textAlign="left" pb={3} direction='column' alignItems='center' paddingTop='10px' fontWeight='bold' >
                                                <div>{route.ruta}</div>
                                                <div> Oferta salarial: {route.salario}</div>
                                            </Flex>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <CourseList routeData={route} />
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Flex>
                    </div>
                ))}
                <Flex justifyContent='center' w='100%'>
                    <Button rounded='lg' marginTop='50px' marginBottom='20px' w='70%' onClick={() => navigate('/Home')}>REGRESAR</Button>
                </Flex>
            </Flex>
        </div>
    );
};
export default Results;
