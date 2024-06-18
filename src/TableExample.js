import React, { useState } from "react";
import { Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import data from "./data.json";

const TableExample = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleModal = (image) => {
    setSelectedImage(image);
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Text 1</th>
          <th>Text 2</th>
          <th>Icon</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.text1}</td>
            <td>{item.text2}</td>
            <td>
              <i className={`fas ${item.icon}`}></i>
            </td>
            <td>
              <Button color="secondary">Action</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Image Viewer</ModalHeader>
        <ModalBody>
          {selectedImage && <img src={selectedImage} alt="Modal Content" style={{ maxWidth: '100%' }} />}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default TableExample;
