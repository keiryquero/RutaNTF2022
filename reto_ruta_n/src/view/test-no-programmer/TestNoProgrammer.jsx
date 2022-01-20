import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Results from "../results/Results";
import { Box, Button, Image, Text, Container, Flex } from '@chakra-ui/react';
import logoBlanco from '../../img/Logo-f-blanco-1.svg';

const TestNoProgrammer = () => {

  const navigate = useNavigate();

  const options = [
    {
      option: "Diseño visual de una página web",
    },
    {
      option: "Desarrollo de funcionalidades de una página web",
    },
    {
      option: "Diseñar cómo el usuarix utiliza una web/app",
    },
    {
      option: "Manejo de datos desde una Base de Datos",
    },
    {
      option: "Uso de la programación para cálculos matemáticos y estadísticos",
    },
  ];
  const options2 = [
    {
      option2: "Creatividad",
    },
    {
      option2: "Comunicación",
    },
    {
      option2: "Habilidad Analítica",
    },
    {
      option2: "Aprendizaje rápido"
    },
    {
      option2: "Toma de decisiones basada en datos",
    },
    {
      option2: "Innovación",
    },
  ];

  const [arrTemp, setArrTemp] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [disabled2, setDisabled2] = useState(false);
  const [showCheckboxes, setShowCheckboxes] = useState(true)

  const addItemHandler = (e) => {
    if (arrTemp.includes(e.target.value)) {
      let indexFound = arrTemp.indexOf(e.target.value);
      arrTemp.splice(indexFound, 1);
      setArrTemp(arrTemp);
    } else {
      setArrTemp([...arrTemp, e.target.value]);
    }

    arrTemp.length === 1 ? setDisabled(true) : setDisabled(false);
  };

  const addItemHandler2 = (e) => {
    if (arrTemp.includes(e.target.value)) {
      let indexFound = arrTemp.indexOf(e.target.value);
      arrTemp.splice(indexFound, 1);
      setArrTemp(arrTemp);
    } else {
      setArrTemp([...arrTemp, e.target.value]);
    }

    arrTemp.length === 4 ? setDisabled2(true) : setDisabled2(false);
  };

  const [path, setPath] = useState([]);

  function match1() {
    const arry1 = [
      "Diseño visual de una página web",
      "Manejo de datos desde una Base de Datos",
      "Habilidad Analítica",
      "Aprendizaje rápido",
    ];
    const arry2 = [
      "Desarrollo de funcionalidades de una página web",
      "Diseñar cómo el usuarix utiliza una web/app",
      "Creatividad",
      "Comunicación",
    ];
    const arry3 = [
      "Manejo de datos desde una Base de Datos",
      "Uso de la programación para cálculos matemáticos y estadísticos",
      "Toma de decisiones basada en datos",
      "Innovación",
    ];

    let contMatch1 = 0;
    let contMatch2 = 0;
    let contMatch3 = 0;

    arrTemp.forEach((element) => {
      if (arry1.includes(element)) {
        contMatch1 += 1;
      }
      if (arry2.includes(element)) {
        contMatch2 += 1;
      }
      if (arry3.includes(element)) {
        contMatch3 += 1;
      }
    });

    if (contMatch1 > contMatch2 && contMatch1 > contMatch3) {
      setPath(...path, ["Desarrollo Web", "Programación básica"]);
    } else if (contMatch2 > contMatch1 && contMatch2 > contMatch3) {
      setPath(...path, ["FrontEnd", "Programación básica"]);
    } else if (contMatch3 > contMatch2 && contMatch3 > contMatch1) {
      setPath(...path, ["Python", "Programación básica"]);
    } else {
    }

    return contMatch1, contMatch2, contMatch3;
  }

  return (
    <>
      <Flex justifyContent='end' mt='10px' mr='10px' >
        <Button justifyContent='center' w='25%' h='20px' fontSize='14px' boxShadow='lg' p='3' rounded='lg' borderWidth='1px' borderColor='#00028A' size='md' onClick={() => navigate('/Home')}> Regresar </Button>
      </Flex>
      <Image src={logoBlanco} alt='logoMDT' margin='30px' w='13%' />
      <Box w='100%' color='blue'>
        {showCheckboxes ? (
          <form action="submit">
            <Text fontSize='3xl' textAlign={'center'} >Test</Text>
            <Container p={2}>
              <Text fontWeight='bold'>¿En cuáles de las siguientes áreas te gustaría desarrollarte como
                programador? (Por favor escoge 2)</Text>

              <div>
                {options.map((currentOption) => (
                  <div key={currentOption}>
                    <input
                      type="checkbox"
                      value={currentOption.option}
                      disabled={disabled}
                      onClick={addItemHandler}
                    />
                    <label> {currentOption.option}</label>
                  </div>
                ))}
              </div>
            </Container>
            <Container p={2}>
              <Text fontWeight='bold' >¿Con cuáles de estas habilidades blandas te identificas más?(Por favor escoge 3)</Text>
              <div>
                {options2.map((currentOption2) => (
                  <div key={currentOption2}>
                    <input
                      type="checkbox"
                      value={currentOption2.option2}
                      disabled={disabled2}
                      onClick={addItemHandler2}
                    />
                    <label> {currentOption2.option2}</label>
                  </div>
                ))}
              </div>
            </Container>
            <div>
              <Box display='flex' justifyContent='center'>
                <Button bg='#1f21b7' fontSize='16px' size='lg' color='white' mt={'5px'} mb={'10px'} onClick={() => {
                  setShowCheckboxes(false);
                  match1()
                }}>
                  Ver Resultado
                </Button>
              </Box>
            </div>
          </form>
        ) : (<Results path={path} />)}
      </Box>
    </>
  );
};

export default TestNoProgrammer;
