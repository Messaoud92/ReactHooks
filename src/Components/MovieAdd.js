
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function MovieAdd({movies , setmovies}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newmovie, setnewmovie] = useState({
        name :'',
        posterurl :'',
        description :'',
        rating : 0,

    });
    const handleAdd = ()=> {setmovies([...movies , newmovie]);};
  return (
    <div>
        <Button variant="dark" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Movie name </Form.Label>
        <Form.Control type="text" placeholder="enter movie name " 
        onChange = {(e) =>setnewmovie({...newmovie ,name:e.target})}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Movie img </Form.Label>
        <Form.Control type="text" placeholder="enter url of img"
        onChange = {(e) =>setnewmovie({...newmovie ,posterurl:e.target})} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Movie discription </Form.Label>
        <Form.Control type="text" placeholder="enter discription"
        onChange = {(e) =>setnewmovie({...newmovie ,description:e.target})} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Movie raiting </Form.Label>
        <Form.Control type="text" placeholder="enter movie raiting " 
        onChange = {(e) =>setnewmovie({...newmovie ,rating:e.target})}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
    
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ () => handleAdd() }>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MovieAdd