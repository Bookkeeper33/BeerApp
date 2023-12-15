import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalForm(props: {
    show: boolean;
    onHide: () => void;
}) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter text-primary">
                    Successes!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Form submitted successfully!</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
