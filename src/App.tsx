import React, { useState } from 'react';
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './interfaces/task.ts'

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [description, setDescription] = useState("");
  const [coins, setCoins] = useState(0);

  return (
    <div className="App">
      <div className="App-header">
        <h1> Welcome to the Task Master</h1>
        <h1 className="header2"> Hello End User!</h1>
      </div>
      <Container>
        <Row className="Row">
          <Col className="Column">
            <div>
              <h2>Adding Tasks:</h2>
              <p className="addTask">
                Clicking the add task button allows you to write the name, description, and the reward (in coins) that the task has.
              </p>
            </div>
            <div className="buttonPOS">
              <Popup trigger={<Button className='task-button'> Add Task</Button>} modal nested>
                {
                  <div className="modal">
                    <Form>
                        <Form.Group controlId="formTask">
                        <Form.Label>Task</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter Task" 
                          value={task}
                          onChange={(e) => setTask(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter Description" 
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group controlId="formCoins">
                        <Form.Label>Coins</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter reward (in coins)" 
                          value={coins}
                          onChange={(e) => setCoins(Number(e.target.value))}
                        />
                        </Form.Group>
                      <Button variant="primary" type="submit">
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
              <h4>Task List</h4>
              <ul>
                {taskList.map((val: any) => {
                  return (
                    <li>{val}</li>
                  );
                })}
              </ul>
            </div>
            <div className="buttonPOS">
              <Button className='task-button'> Update</Button>
            </div>
          </Col>
          <Col className="Column">
            <div>
              
            </div>
            <div className='buttonPOS'>
              <Button className='task-button'> Complete</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
