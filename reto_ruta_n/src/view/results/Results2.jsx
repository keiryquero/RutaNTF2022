import React from "react";
import { useEffect, useState } from "react";
import CourseList from "./CourseList";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Button,
  Heading
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const Results2 = (porcRoutes) => {
  const navigate = useNavigate();
  const [data, setDataState] = useState([]);

  const getData = () => {
    fetch("data.json")
      .then((products) => products.json())
      .then((data) => setDataState(data));
  };

  useEffect(() => {
    getData();
  }, []);

  /* const sortResults = () => {
    const newArray = Object.entries(porcRoutes);
    const resultsArray = newArray.map((element) => ({
      routeName: element[0],
      value: element[1]
    }));
    console.log(...resultsArray, 'mapeo');
    const tempArray = [...resultsArray.value].sort(function (a, b) {

      if (a.value > b.value) {
        console.log(tempArray, 'arreglo');
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    // console.log({ resultsArray });

    const sortedArray = tempArray.map(
      (object, i) =>
        data.filter((element) => element.data.ruta === object.routeName)[0]
    );
    console.log(sortedArray, 'arreglo ordenado');
    return sortedArray;
  } */


  return (
    <div>
      <Flex bg='#00028A' direction='column' justifyContent='space-evenly'>
        <Flex justifyContent='center'>

          <Heading as='h3' size='lg' margin='20px' color='white'>

            Estos son tus resultados
          </Heading >
        </Flex>
        {data.map((route) => (
          <div key={route.id}>
            {console.log(route, 'soy route')}
            <Flex color='white' marginTop='15px' justifyContent='center' w='85%' >
              <h3>Afinidad con esta ruta: {porcRoutes.objRoutes[route.ruta]} %</h3>
            </Flex>
            <Flex bg='#00028A' direction='column' alignItems='center' justifyContent='center' >
              <Accordion allowToggle bg='#E5E5E5' w='85%' justifyContent='center' rounded='10px' position="relative" >
                <AccordionItem boxShadow='lg' rounded='10px' borderWidth='1px'>
                  <h2>
                    <AccordionButton  >
                      <Flex flex="1" textAlign="left" pb={3} direction='column' alignItems='center' paddingTop='10px' fontWeight='bold' >
                        <div>{route.ruta}</div>
                        <div> Oferta salarial: {route.salario}</div>
                      </Flex>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={1} >

                    <CourseList routeData={route} />

                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </div>
        ))}
      </Flex>
    </div>

  );
};
export default Results2;
