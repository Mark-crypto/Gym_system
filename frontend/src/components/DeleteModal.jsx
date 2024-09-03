import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const DeleteModal = ({ del, handleCloseDel, handleDelete }) => {
  return (
    <>
      <Modal show={del} onHide={handleCloseDel}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDel}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
