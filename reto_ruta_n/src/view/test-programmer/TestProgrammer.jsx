import React from 'react';
import { useState } from 'react';

const TestProgrammer = () => {
    const testProg1 = [
      {
        option1: "jQuery",
      },
      {
        option1: "HTML",
      },
      {
        option1: "CSS",
      },
      {
        option1: "JavaScript",
      },
      {
        option1: "Algoritmos",
      },
      {
        option1: "Pseudocódigo",
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
        option1: "NodeJS",
      },
      {
        option1: "PHP",
      },
      {
        option1: "Webpack",
      },
      {
        option1: "Git y GitHub",
      },
      {
        option1: "Responsive design",
      },
      {
        option1: "Babel",
      },
      {
        option1: "Bootstrap",
      },
      {
        option1: "Diseño UX UI",
      },
      {
        option1: "React",
      },
      {
        option1: "Angular",
      },
      {
        option1: "Typescript",
      },
      {
        option1: "Figma",
      },
      {
        option1: "Adobe XD",
      },
      {
        option1: "Python",
      },
    ];
     const [arrTemp1, setArrTemp1] = useState([]);
     const [cont1, setCont1] = useState(1);
     const [disabled, setDisabled] = useState(false);
     
     const addItemHandler = (e) => {
       setArrTemp1([...arrTemp1, e.target.value]);
       setCont1(cont1 + 1);
       console.log("estoy aqui", cont1);
       cont1 === 8 ? setDisabled(true) : setDisabled(false);
     };
    return (
      <>
        <form>
          <p>
            De las siguientes habilidades marca aquellas que deseas
            aprender(Puedes escoger 8)
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
          {console.log("arreglo", arrTemp1)}
        </form>
      </>
    );
};

export default TestProgrammer;