import React from 'react';
import { useEffect, useState } from 'react';
import CourseList from './CourseList';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, 
    Box
  } from '@chakra-ui/react';

const Results = () => {
    const [data, setDataState] = useState([]);
    //console.log(data);
    const getData = () => {
        fetch("data.json")
            .then((products) => products.json())
            .then((data) => setDataState(data));
    };

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            {data.map((route) => (
                <div key={route.id}>
                    <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                               {route.ruta}
                               {route.salario}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <CourseList routeData={route} />
                    </AccordionPanel>
                </AccordionItem>

                
            </Accordion>
                    
                </div>
            ))
            }

            
        </div>
    );
};

export default Results;


