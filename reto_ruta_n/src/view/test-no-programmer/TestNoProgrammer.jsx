import { useAccordionDescendantsContext } from '@chakra-ui/react';
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Results from "../results/Results";

const TestNoProgrammer = () => {

 /*  const navigate = useNavigate(); */
 
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
  const [showCheckboxes, setShowCheckboxes] = useState(true)

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
  
  const [path, setPath] = useState([]);
 

  console.log("pagina resultados", arrTemp[0]);

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
      console.log("Programación básica", "Desarrollo Web");
    } else if (contMatch2 > contMatch1 && contMatch2 > contMatch3) {
      setPath(...path,["FrontEnd","Programación básica"]);
      console.log("Programación básica", "FrontEnd");
    } else if (contMatch3 > contMatch2 && contMatch3 > contMatch1) {
      setPath(...path,["Python", "Programación básica"]);
      console.log("Programación básica", "Python");
    } else {
      console.log("Programación básica");
    }
    console.log(
      "Desarrollo Web: ", contMatch1,
      "Frontend: ", contMatch2,
      "Python :", contMatch3
    );
   
    return contMatch1, contMatch2, contMatch3;
  }

  return (
    <>
    {showCheckboxes ? (
 <form action="submit">
 <p>
   ¿En cuáles de las siguientes áreas te gustaría desarrollarte como
   programador? (Por favor escoge 2)
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
   ¿Con cuáles de estas habilidades blandas te identificas más?(Por favor escoge 3)
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
 </div>
 {console.log("arreglo", arrTemp)}
 <div>
   <button onClick={() => 
   {setShowCheckboxes(false);
   match1()}}>
     Ver ResultadO
   </button>
 </div>
</form>
    ): (<Results path={path}/>)}
    </>
  );
};

export default TestNoProgrammer;
