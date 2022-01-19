import React from 'react';
import { useEffect, useState } from 'react';
import {
    List,
    ListItem,
    ListIcon,
    UnorderedList,
} from '@chakra-ui/react'

const CourseList = ({ routeData }) => {

    return (
        <div>
            {routeData.cursos.map((course) => (
                <div key={course.nombre}>

                    <UnorderedList>
                        <ListItem><button onClick={()=>console.log('hola')}>{course.nombre}
                        </button></ListItem>
                    </UnorderedList>
                    
                </div>
            ))}
        </div>
    );
};

export default CourseList;



