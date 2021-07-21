import Modal from 'react-modal';
import { useState } from 'react';
import { Button, Container, Div, GridFormFileds, TableContrato } from "./styles";

Modal.setAppElement("#root");

export function Empresa() {

    const [modalContratoIsOpen, setContratoIsOpen] = useState(false);

    function openContratoModal() {
        setContratoIsOpen(true);
    }
    function closeContratoModal() {
        setContratoIsOpen(false);
    }

    const [modalEmpresaIsOpen, setEmpresaIsOpen] = useState(false);

    function openEmpresaModal() {
        setEmpresaIsOpen(true);
    }
    function closeEmpresaModal() {
        setEmpresaIsOpen(false);
    }

    return (
        <>
            <Div>
                <div className="linha">
                    <div className="coluna-50">
                        <TableContrato>
                            <Button>
                                <button type="button" onClick={openContratoModal}>
                                    Novo Contrato
                                </button>
                            </Button>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Duração</th>
                                        <th>Data inicio</th>
                                        <th>Data fim</th>
                                        <th>Ativo</th>
                                        <th>Empresa</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>2 meses</td>
                                        <td>20/07/2021</td>
                                        <td>20/09/2021</td>
                                        <td>Verdadeiro</td>
                                        <td>Aoop Cloud Solutions</td>
                                    </tr>

                                    <tr>
                                        <td>3 meses</td>
                                        <td>20/04/2021</td>
                                        <td>20/07/2021</td>
                                        <td>Falso</td>
                                        <td>Aoop Cloud Solutions</td>
                                    </tr>
                                </tbody>
                            </table>
                        </TableContrato>

                    </div>
                    <div className="coluna-50">
                        <TableContrato>
                            <Button>
                                <button type="button" onClick={openEmpresaModal}>
                                    Nova Empresa
                                </button>
                            </Button>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>CNPJ</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Aoop Cloud Solutions</td>
                                        <td>32.271.245/0001-40</td>
                                    </tr>
                                </tbody>
                            </table>
                        </TableContrato>
                    </div>
                </div>
            </Div>

            <Modal
                isOpen={modalContratoIsOpen}
                onRequestClose={closeContratoModal}
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



            <Modal
                isOpen={modalEmpresaIsOpen}
                onRequestClose={closeEmpresaModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <h2>Inserir Empresa</h2>
                <Container>
                    <GridFormFileds>
                        <input placeholder="Nome"></input>
                        <input placeholder="CNPJ"></input>
                    </GridFormFileds>
                </Container>
                <button type="submit">
                    Salvar
                </button>
            </Modal>

            
        </>
    )
}