// src/Formulario.js
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const FormularioRegistro = () => {
  const initialFormState = {
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    edad: '',
    genero: '',
    rol: '',
    opciones: false,
    notas: '',
    fechaRegistro: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [modal, setModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  const handleReset = () => {
    setFormData(initialFormState);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="nombre">Nombre:</Label>
          <Input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apellido">Apellido:</Label>
          <Input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contraseña">Contraseña:</Label>
          <Input
            type="password"
            id="contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="edad">Edad:</Label>
          <Input
            type="number"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Género</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="genero"
                value="masculino"
                checked={formData.genero === 'masculino'}
                onChange={handleChange}
              />{' '}
              Masculino
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="genero"
                value="femenino"
                checked={formData.genero === 'femenino'}
                onChange={handleChange}
              />{' '}
              Femenino
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="rol">Rol:</Label>
          <Input
            type="select"
            id="rol"
            name="rol"
            value={formData.rol}
            onChange={handleChange}
          >
            <option value="">Selecciona un rol</option>
            <option value="usuario">Usuario</option>
            <option value="administrador">Administrador</option>
          </Input>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="opciones"
              name="opciones"
              checked={formData.opciones}
              onChange={handleChange}
            />{' '}
            Acepto términos y condiciones
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="notas">Notas:</Label>
          <Input
            type="textarea"
            id="notas"
            name="notas"
            value={formData.notas}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="fechaRegistro">Fecha de registro:</Label>
          <Input
            type="date"
            id="fechaRegistro"
            name="fechaRegistro"
            value={formData.fechaRegistro}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" color="primary">Enviar</Button>
        <Button color="info" onClick={toggleModal} className="ml-2">Mostrar</Button>
        <Button color="secondary" onClick={handleReset} className="ml-2">Reiniciar</Button>
      </Form>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Información Registrada</ModalHeader>
        <ModalBody>
          <p><strong>Nombre:</strong> {formData.nombre}</p>
          <p><strong>Apellido:</strong> {formData.apellido}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Contraseña:</strong> {formData.contraseña}</p>
          <p><strong>Edad:</strong> {formData.edad}</p>
          <p><strong>Género:</strong> {formData.genero}</p>
          <p><strong>Rol:</strong> {formData.rol}</p>
          <p><strong>Opciones:</strong> {formData.opciones ? 'Sí' : 'No'}</p>
          <p><strong>Notas:</strong> {formData.notas}</p>
          <p><strong>Fecha de Registro:</strong> {formData.fechaRegistro}</p>
        </ModalBody>
      </Modal>
    </>
  );
};

export default FormularioRegistro;
