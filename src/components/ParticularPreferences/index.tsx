import { Button, Container, GridFormFileds, Table } from "./styles";
import Modal from 'react-modal';
import { useState } from 'react';

export function ParticularPreferences() {

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
                        Preferências
                    </button>
                </Button>
                <table>
                    <thead>
                        <tr>
                            <th>Regras</th>
                            <th>Usuário</th>
                            <th>Instância</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>2 meses</td>
                            <td>20/07/2021</td>
                            <td>20/09/2021</td>
                        </tr>

                        <tr>
                            <td>3 meses</td>
                            <td>20/04/2021</td>
                            <td>20/07/2021</td>
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
                    <h2>Criar novo contrato</h2>

                    <input placeholder="Duração"></input>
                    <GridFormFileds>
                        <input placeholder="Data inicio"></input>
                        <input placeholder="Data fim"></input>
                    </GridFormFileds>
                    <GridFormFileds>
                        <select name="select" defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled>Selecione</option>
                            <option value="true">Ativo</option>
                            <option value="false">Inativo</option>
                        </select>
                        <input placeholder="Empresa"></input>
                    </GridFormFileds>
                    <button type="submit">
                        Salvar
                    </button>
                </Container>

            </Modal>
        </>
    )
}