import React from 'react';
import { useState } from 'react';
import CourseModal from './CourseModal';
import {
    ListItem,
    UnorderedList,
    useDisclosure,
    Button, Box
} from '@chakra-ui/react'

const CourseList = ({ routeData }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [contentModal, setContentModal] = useState('');
    /* const variable; */
    console.log(contentModal, 'modal content');
    return (
        <div>
            {routeData.cursos.map((course) => (
                /* variable = course.nombre; */
                <div key={course.nombre}>
                    <UnorderedList >
                        <ListItem ><Button bg='#E5E5E5' value={course.nombre} onClick={(e) => { setContentModal(e.target.value); onOpen() }}>{course.nombre}
                            <CourseModal isOpen={isOpen} onClose={onClose} course={course} contentModal={contentModal} />
                        </Button></ListItem>
                    </UnorderedList>

                </div>
            ))}
        </div>
    );
};

export default CourseList;



