import { Button, Container, GridFormFileds, Table } from "./styles";
import Modal from 'react-modal';
import { useState } from 'react';

export function Instancia() {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Table>
                <Button>
                    <button type="button" onClick={openModal}>
                        Instâncias
                    </button>
                </Button>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>URL</th>
                            <th>Senha</th>
                            <th>Contrato</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>2 meses</td>
                            <td>20/07/2021</td>
                            <td>20/09/2021</td>
                            <td>20/09/2021</td>
                        </tr>

                        <tr>
                            <td>3 meses</td>
                            <td>20/04/2021</td>
                            <td>20/07/2021</td>
                            <td>20/09/2021</td>
                        </tr>
                    </tbody>
                </table>
            </Table>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >

                <Container>
                    <h2>Criar nova instância</h2>

                    <input placeholder="Nome"></input>
                    <GridFormFileds>
                        <input placeholder="URL"></input>
                        <input placeholder="Senha"></input>
                    </GridFormFileds>
                    <input placeholder="Contrato"></input>
                    <button type="submit">
                        Salvar
                    </button>
                </Container>

            </Modal>
        </>
    )
}