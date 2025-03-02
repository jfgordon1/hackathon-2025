import React, { useState } from 'react';
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

            </div>
            <div className="buttonPOS">
              <Button onClick={handleShow}> Add Task</Button>
            </div>
          </Col>
          <Col className="Column">
            <div>
              
            </div>
            <div className="buttonPOS">
              <Button> Update</Button>
            </div>
          </Col>
          <Col className="Column">
            <div>
              
            </div>
            <div className='buttonPOS'>
              <Button> Complete</Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} className='popUp'>
        <Modal.Header closeButton>
          <Modal.Title>Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Here are the details of the task...</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
