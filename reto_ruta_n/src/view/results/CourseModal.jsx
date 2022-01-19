import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react'

const CourseModal = ({ isOpen, onClose, course, contentModal }) => {
    //console.log(course);
    return (
        <>
            {contentModal === course.nombre ?
                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{course.nombre}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <p>{course.nivel}</p>
                            <p>{course.duracion}</p>
                            <p>{course.habilidades}</p>
                            <p>{course.institución}</p>
                            <p>{course.costo}</p>
                            <p>{course.link}</p>
                            {/* <p count={2} /> */}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                : ''}
        </>
    );
};

export default CourseModal;