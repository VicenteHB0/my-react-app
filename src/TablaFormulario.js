import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import ModalEditar from './ModalEditar'; // Importa el nuevo componente del modal
//porps pide una lista y la accion de editar y eliminar
const TablaFormulario = ({ dataList, handleDelete, handleEdit }) => {

  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
//Pra saber si el modal esta abierto o cerrado
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleEditClick = (index) => {
    setSelectedData({ ...dataList[index], index });
    toggleModal();
  };

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Edad</th>
            <th>Género</th>
            <th>Rol</th>
            <th>Opciones</th>
            <th>Notas</th>
            <th>Fecha de Registro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data, index) => (
            <tr key={index}>
              <td>{data.nombre}</td>
              <td>{data.apellido}</td>
              <td>{data.email}</td>
              <td>{data.edad}</td>
              <td>{data.genero}</td>
              <td>{data.rol}</td>
              <td>{data.opciones ? 'Sí' : 'No'}</td>
              <td>{data.notas}</td>
              <td>{data.fechaRegistro}</td>
              <td>
                <Button color="primary" size="sm" onClick={() => handleEditClick(index)} className="mr-2">
                  <FaEdit />
                </Button>
                <Button color="danger" size="sm" onClick={() => handleDelete(index)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      {selectedData && (
        <ModalEditar
          isOpen={isModalOpen}
          toggle={toggleModal}
          data={selectedData}
          handleEdit={handleEdit}
        />
      )}
    </>
  );
};

export default TablaFormulario;
