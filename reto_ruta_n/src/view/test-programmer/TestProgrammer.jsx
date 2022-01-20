import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


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
     const [cont1, setCont1] = useState(1);
     const [cont2, setCont2] = useState(1);
     const [disabled, setDisabled] = useState(false);
     const [disabled2, setDisabled2] = useState(false);

     
     const addItemHandler = (e) => {
       setArrTemp1([...arrTemp1, e.target.value]);
       setCont1(cont1 + 1);
       console.log("estoy aqui", cont1);
       cont1 === 8 ? setDisabled(true) : setDisabled(false);
     };
       const addItemHandler2 = (e) => {
         setArrTemp1([...arrTemp1, e.target.value]);
         setCont2(cont2 + 1);
         console.log("estoy aqui2", cont2);
         cont2 === 3 ? setDisabled2(true) : setDisabled2(false);
       };
    return (
      <>
        <form>
          <p>
            De las siguientes habilidades marca aquellas que deseas aprender(Por
            favor escoger 8)
          </p>
          <div>
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
          </div>

          <p>
            ¿Con cuáles de estas habilidades blandas te identificas más? (Por
            favor escoger 3)
          </p>
          <div>
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
          </div>
          {console.log("arreglo", arrTemp1)}
          <div>
            <button onClick={() => navigate("/Results")}>Ver Resultadp</button>
          </div>
        </form>
      </>
    );
};

export default TestProgrammer;