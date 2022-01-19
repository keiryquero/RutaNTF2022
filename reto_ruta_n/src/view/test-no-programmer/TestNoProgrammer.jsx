import React from "react";
import { useState, useEffect } from "react";

const TestNoProgrammer = () => {
  const arry1 = [
    " Diseño visual de una página web",
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
  const [cont1, setCont1] = useState(1);
  const [cont2, setCont2] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [disabled2, setDisabled2] = useState(false);

  const addItemHandler = (e) => {
    setArrTemp([...arrTemp, e.target.value]);
    setCont1(cont1 + 1);
    console.log("estoy aqui", cont1);
    cont1 === 2 ? setDisabled(true) : setDisabled(false);
  };
  const addItemHandler2 = (e) => {
    setArrTemp([...arrTemp, e.target.value]);
    setCont2(cont2 + 1);
    console.log("estoy aqui2", cont2);
    cont2 === 3 ? setDisabled2(true) : setDisabled2(false);
  };
  

  return (
    <>
      <form action="submit">
        <p>
          ¿En cuáles de las siguientes áreas te gustaría desarrollarte como
          programador? (Escoge 2)
        </p>
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

        <p>
          ¿Con cuáles de estas habilidades blandas te identificas más?(Escoge 3)
        </p>
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
          {console.log("arreglo",arrTemp)}
        </div>
      </form>
    </>
  );
};

export default TestNoProgrammer;
