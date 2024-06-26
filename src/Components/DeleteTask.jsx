import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//Component to delete the tasks
const DeleteTask = ({ isOpen, toggle, taskObj, index, taskList, setTaskList }) => {
    //Performs deletion on passed TASKLIST 
    const OnDelete = () => {
        const updatedTaskList = taskList.filter(task => task.Name !== index);
        
        setTaskList(updatedTaskList);
        
        toggle();  // Closes the form
    };
    

    return (
        <> 
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader>Delete Task</ModalHeader>
                <ModalBody>
                    <p>Are You Sure to delete this Task {}?</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={OnDelete}>Delete</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={!isOpen} toggle={toggle}>
                <ModalHeader>Delete Task</ModalHeader>
                <ModalBody>
                    <p>Completed Task {taskObj.Name} cannot be deleted!!</p>
                </ModalBody>
            </Modal>
        </>
    );
};

export default DeleteTask;
