import { Modal, Button, Spinner, Form } from "react-bootstrap";
import { useState } from "react";

const ModalTopUp = ({ onClose }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        onClose();
    };

    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="d-flex" variant="primary" onClick={handleShow}>
                Isi Saldo
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Isi Saldo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <label htmlFor="jumlahUang"><strong>Jumlah Uang</strong></label>
                        <input type="text" className="form-control mt-2" id="jumlahUang" name="jumlahUang" placeholder="Masukkan Jumlah Uang"/>
                        <br/>
                        <label htmlFor="pilihLayanan"><strong>Pilih layanan TopUp:</strong></label>
                        <select className="form-select" aria-label="Default select example" id="pilihLayanan" name="pilihLayanan">
                            <option value="1">Bank Transfer</option>
                            <option value="2">E-Money</option>
                        </select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Tutup
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Isi Saldo
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalTopUp;