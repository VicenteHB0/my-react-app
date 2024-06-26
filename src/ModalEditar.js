import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const ModalEditar = ({ isOpen, toggle, data, handleEdit }) => {
  const [formData, setFormData] = useState(data);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!/^[a-zA-Z]+$/.test(formData.nombre)) {
      errors.nombre = 'Este campo solo acepta letras';
    }

    if (!/^[a-zA-Z]+$/.test(formData.apellido)) {
      errors.apellido = 'Este campo solo acepta letras';
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = 'Debe tener formato de correo electrónico';
    }

    if (!/^[1-9][0-9]?$|^100$/.test(formData.edad)) {
      errors.edad = 'Solo acepta números positivos, hasta el número 100';
    }

    if (new Date(formData.fechaRegistro) < new Date().setHours(0, 0, 0, 0)) {
      errors.fechaRegistro = 'Solo debe aceptar fechas a partir del día en curso';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleEdit(formData);
      toggle();
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Editar Registro</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="nombre">Nombre:</Label>
            <Input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              valid={formData.nombre && !formErrors.nombre}
              invalid={!!formErrors.nombre}
            />
            <FormFeedback>{formErrors.nombre}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="apellido">Apellido:</Label>
            <Input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              valid={formData.apellido && !formErrors.apellido}
              invalid={!!formErrors.apellido}
            />
            <FormFeedback>{formErrors.apellido}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              valid={formData.email && !formErrors.email}
              invalid={!!formErrors.email}
            />
            <FormFeedback>{formErrors.email}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="edad">Edad:</Label>
            <Input
              type="number"
              id="edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              valid={formData.edad && !formErrors.edad}
              invalid={!!formErrors.edad}
            />
            <FormFeedback>{formErrors.edad}</FormFeedback>
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
              valid={formData.fechaRegistro && !formErrors.fechaRegistro}
              invalid={!!formErrors.fechaRegistro}
            />
            <FormFeedback>{formErrors.fechaRegistro}</FormFeedback>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>Guardar</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancelar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalEditar;
