import React from "react";
import { useState } from "react";
import Results2 from '../results/Results2';
import logoBlanco from '../../img/Logo-f-blanco-1.svg';
import { Image, Box, Text, Button, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const TestProgrammer = () => {
  const navigate = useNavigate();

  const testProg1 = [
    {
      option1: "jQuery",
    },
    {
      option1: "Power BI",
    },
    {
      option1: "HTML/CSS/JavaScript",
    },
    {
      option1: "Base de datos noSQL (mongodb, graphql)",
    },
    {
      option1: "Algoritmos a de software AAA",
    },
    {
      option1: "NPM",
    },
    {
      option1: "Fundamentos para FrontEnd",
    },
    {
      option1: "Fundamentos para BackEnd",
    },
    {
      option1: "Fundamentos de bases de datos",
    },
    {
      option1: "SQL",
    },
    {
      option1: "Diseño y desarrollo de una API",
    },
    {
      option1: "NodeJS",
    },
    {
      option1: "Java",
    },
    {
      option1: "PHP",
    },
    {
      option1: "Api REST",
    },
    {
      option1: "Responsive design",
    },
    {
      option1: "Excel bussines intelligence",
    },
    {
      option1: "Diseño UX UI",
    },
    {
      option1: "React/Angular",
    },
    {
      option1: "R",
    },
    {
      option1: "Blockchain",
    },
    {
      option1: "Figma",
    },
    {
      option1: "Rapidminer",
    },
    {
      option1: "Python",
    },
    {
      option1: "Open SSL",
    },
    {
      option1: "Protocolos Http/Https,servidores",
    },
    {
      option1: "Algoritmos HASH",
    },
    {
      option1: "Manejo de Frameworks (backend)",
    },
  ];
  const testProg2 = [
    {
      option2: "Habilidad analítica",
    },
    {
      option2: "Innovación",
    },
    {
      option2: "Orientación al resultado",
    },
    {
      option2: "Compromiso",
    },
    {
      option2: "Habilidades digitales",
    },
    {
      option2: "Toma de decisiones basada en datos",
    },
    {
      option2: "Creatividad",
    },
    {
      option2: "Mentalidad de crecimiento",
    },
    {
      option2: "Comunicación",
    },
    {
      option2: "Aprendizaje rápido",
    },
  ];

  const [arrTemp1, setArrTemp1] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [disabled2, setDisabled2] = useState(false);
  const [showResult2, setShowResult2] = useState(true);
  const [porcRoutes, setPorcRoutes] = useState('');

  const addItemHandler = (e) => {
    if (arrTemp1.includes(e.target.value)) {
      let indexFound = arrTemp1.indexOf(e.target.value);
      arrTemp1.splice(indexFound, 1);
      setArrTemp1(arrTemp1);
    } else {
      setArrTemp1([...arrTemp1, e.target.value]);
    }
    arrTemp1.length === 7 ? setDisabled(true) : setDisabled(false);
  };

  const addItemHandler2 = (e) => {
    if (arrTemp1.includes(e.target.value)) {
      let indexFound = arrTemp1.indexOf(e.target.value);
      arrTemp1.splice(indexFound, 1);
      setArrTemp1(arrTemp1);
    } else {
      setArrTemp1([...arrTemp1, e.target.value]);
    }
    arrTemp1.length === 10 ? setDisabled2(true) : setDisabled2(false);
  };

  const match2 = () => {
    const arrayP1 = [
      "HTML/CSS/JavaScript",
      "Fundamentos para FrontEnd",
      "Fundamentos para BackEnd",
      "PHP",
      "Aprendizaje rápido",
      "Habilidades digitales",
      "Mentalidad de crecimiento",
    ];
    const arrayP2 = [
      "HTML/CSS/JavaScript",
      "Responsive design",
      "Diseño UX UI",
      "React/Angular",
      "Figma",
      "Creatividad",
      "Comunicación",
      "Habilidad analítica",
    ];
    const arrayP3 = [
      "NodeJS",
      "Protocolos Http/Https,servidores",
      "Base de datos noSQL (mongodb, graphql)",
      "Diseño y desarrollo de una API",
      "Manejo de Frameworks (backend)-express",
      "Habilidad analítica",
      "Orientación al resultado",
      "Toma de decisiones basada en datos",
    ];
    const arrayP4 = [
      "HTML/CSS/JavaScript",
      "Fundamentos de bases de datos",
      "React/Angular",
      "Protocolos Http/Https,servidores",
      "Api REST",
      "Compromiso",
      "Orientación al resultado",
      "Habilidad Analítica",
    ];
    const arrayP5 = [
      "SQL",
      "Python",
      "NPM",
      "Protocolos Http/Https,servidores",
      "Habilidad analítica",
      "Innovación",
      "Toma de decisiones basada en datos",
    ];
    const arrayP6 = [
      "jQuery",
      "HTML/CSS/JavaScript",
      "Fundamentos de bases de datos",
      "Python",
      "Aprendizaje rápido",
      "Habilidad analítica",
      "Habilidades digitales",
    ];
    const arrayP7 = [
      "Excel bussines intelligence",
      "R",
      "Rapidminer",
      "Power BI",
      "Python",
      "Toma de decisiones basada en datos",
      "Orientación al resultado",
      "Habilidad analítica",
    ];

    const arrayP8 = [
      "Java",
      "Arquitectura de software AAA",
      "Algoritmos HASH",
      "Open SSL",
      "Blockchain",
      "Compromiso",
      "Toma de decisiones basada en datos",
      "Habilidad analítica",
    ];

    let contMatch01 = 0;
    let contMatch02 = 0;
    let contMatch03 = 0;
    let contMatch04 = 0;
    let contMatch05 = 0;
    let contMatch06 = 0;
    let contMatch07 = 0;
    let contMatch08 = 0;

    arrTemp1.forEach((element) => {
      if (arrayP1.includes(element)) {
        contMatch01 += 1;
      }
      if (arrayP2.includes(element)) {
        contMatch02 += 1;
      }
      if (arrayP3.includes(element)) {
        contMatch03 += 1;
      }
      if (arrayP4.includes(element)) {
        contMatch04 += 1;
      }
      if (arrayP5.includes(element)) {
        contMatch05 += 1;
      }
      if (arrayP6.includes(element)) {
        contMatch06 += 1;
      }
      if (arrayP7.includes(element)) {
        contMatch07 += 1;
      }
      if (arrayP8.includes(element)) {
        contMatch08 += 1;
      }
    });

    const porcArr1 = Math.trunc((contMatch01 * 100) / arrayP1.length)
    const porcArr2 = Math.trunc((contMatch02 * 100) / arrayP2.length)
    const porcArr3 = Math.trunc((contMatch03 * 100) / arrayP3.length)
    const porcArr4 = Math.trunc((contMatch04 * 100) / arrayP4.length)
    const porcArr5 = Math.trunc((contMatch05 * 100) / arrayP5.length)
    const porcArr6 = Math.trunc((contMatch06 * 100) / arrayP6.length)
    const porcArr7 = Math.trunc((contMatch07 * 100) / arrayP7.length)
    const porcArr8 = Math.trunc((contMatch08 * 100) / arrayP8.length)

    const arrayPor = [porcArr1, porcArr2, porcArr3, porcArr4, porcArr5, porcArr6, porcArr7, porcArr8]

    const objRoutes = {
      "Programación básica": porcArr1,
      "FrontEnd": porcArr2,
      "BackEnd": porcArr3,
      "Fullstack": porcArr4,
      "Python": porcArr5,
      "Desarrollo Web": porcArr6,
      "Análisis de datos": porcArr7,
      "Ciberseguridad": porcArr8
    }
    setPorcRoutes(objRoutes)
    return (arrayPor)
  };


  return (
    <>
      <Button onClick={() => navigate('/InitialTest')}> Regresar </Button>

      <Image src={logoBlanco} alt='logoMDT' margin='20px' w='15%' />
      {showResult2 ? (
        <Box color='#00014e' fontWeight={400} ml='20px' mr='8px'>
          <form >
            <Text fontSize='3xl' textAlign={'center'} >Test</Text>

            <Container p={2}>
              <Text fontWeight='bold'>
                De las siguientes habilidades marca aquellas que deseas aprender(Por
                favor escoger 8)
              </Text>
              {testProg1.map((currentOption1) => (
                <div key={currentOption1}>
                  <input
                    type="checkbox"
                    value={currentOption1.option1}
                    disabled={disabled}
                    onClick={addItemHandler}
                  />
                  <label> {currentOption1.option1}</label>
                </div>
              ))}
            </Container>
            <Container p={2}>
              <Text fontWeight='bold' >
                ¿Con cuáles de estas habilidades blandas te identificas más? (Por
                favor escoger 3)
              </Text>
              {testProg2.map((currentOption2) => (
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
            </Container>
            <Box display='flex' justifyContent='center' mt='10px' mb='15px'>
              <Button bg='#1f21b7' fontSize='16px' size='lg' color='white' alignItems='center'
                onClick={() => {
                  setShowResult2(false);
                  match2()
                }}>Ver Resultados</Button>
            </Box>
          </form>
        </Box>
      ) : (<Results2 objRoutes={porcRoutes} />)}

    </>
  );
};

export default TestProgrammer;
