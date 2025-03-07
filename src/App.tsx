import React, { useState } from 'react';
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import './App.css';
import './interfaces/task.ts'
import { Task } from './interfaces/task'; 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App() {
  const [taskName, setTaskName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [taskList, setTaskList] = useState<any>([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [id, setId] = useState(0);
  const [idList, setIdList] = useState<number[]>([]);
  const [coins, setCoins] = useState(0);


  const handleClose = () => {
    setIsOpen(false);
  }

  const handleComplete = (targetId: number) => {
    if (idList.includes(targetId)) {
      setCoins(coins + 10);
      taskList.filter(
        (task: Task): boolean => task.id !== id,
      );
      idList.filter((val: number): boolean => targetId !== id,
    )
    setId(id);
  }
    
    else{
      alert("ID not found");
    }
  }

  const handleDelete = (targetId: number) => {
    console.log(targetId);
    if (idList.includes(targetId)) {
      taskList.filter(
        (task: Task): boolean => task.id !== id,
      );
      idList.filter((val: number): boolean => val !== targetId,
    )
    } 
    else{
      alert("ID not found");
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1> Welcome to the Task Master!</h1>
        <h1 className="header2"> Please enjoy this simple-to-use gameified task tracker!</h1>
      </div>
      <Container>
        <Row className="Row">
          <Col className="Column">
            <div>
              <h2 className = "Column-Header">Adding Tasks:</h2>
              <p className="addTask">
                Clicking the add task button allows you to write the name, description, and earn a reward (in coins) once the task is complete.
              </p>
            </div>
            <div className="buttonPOS">
              <Button className="task-button" onClick={() => setIsOpen(true)}>Add Task</Button>
              <Popup open = {isOpen} onClose = {handleClose} modal nested>
                {
                  <div>
                    <Form>
                        <Form.Group controlId="formTask">
                          <Form.Label>Task</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Enter Task"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter Description" 
                          value={taskDescription}
                          onChange={(e) => setTaskDescription(e.target.value)}
                        />
                        </Form.Group>
                        <Button className="buttonPOS" onClick={() => {
                        const newTask = {name:taskName, description: taskDescription, id: id};
                        setTaskList([...taskList, newTask]);
                        console.log(taskList);
                        setIdList([...idList, id]);
                        console.log(idList);
                        handleClose();
                        setId(id + 1);
                        }}>
                        Submit
                        </Button>
                    </Form>
                  </div>
                }
              </Popup>
            </div>
          </Col>
          <Col className="Column">
            <div>
              <h2 className = "Column-Header">Task List                 Coins: {coins}</h2>
              <ul>
                {taskList.map((task: Task, index: number) => {
                  return (
                    <li> {idList[index]}: {task.name} </li>
                  );
                })}
              </ul>
            </div>
            <div className="buttonPOS">
              <Form>
                <Form.Group controlId='idNumber'>
                  <Form.Label>Enter ID to Complete</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter ID"
                    onKeyDown={(e) => {if(e.key === "Enter"){
                      e.preventDefault();
                      (handleComplete(parseInt((e.target as HTMLInputElement).value)));
                    }
                  }}
                  />
                </Form.Group>
              </Form>
              <Button className='task-button' onClick={() =>  {
                setTaskList([]);
                setIdList([]);
                setId(0);
              }}> Clear List</Button>
              <Button className='task-button' onClick={() => {
                taskList.pop();
                setTaskList([...taskList]);
                idList.slice(0, -1);
                setIdList([...idList]);
              }}> Delete Last</Button>
              <Form>
                <Form.Group controlId='idNumber'>
                  <Form.Label>Enter ID to Delete</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter ID"
                    onKeyDown={(e) => {if(e.key === "Enter"){
                      e.preventDefault();
                      (handleDelete(parseInt((e.target as HTMLInputElement).value)));
                    }
                  }}
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="App-footer">
        <h1> Thank you for using the Task Master!</h1>
      </div>
    </div>
    
  );
}

export default App;
