import { Button, Container, GridFormFileds, Table } from "./styles";
import Modal from 'react-modal';
import React from "react";

export function Regras() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Button>
                <button type="button" onClick={openModal}>
                    Nova Regra
                </button>
            </Button>
            <Table>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>Ativo</th>
                            <th>Categoria</th>
                            <th>Classiificação</th>
                            <th>Link Documentação</th>
                            <th>Mensagem</th>
                            <th>Script Rule</th>
                            <th>Severidade</th>
                            <th>Sugestão</th>
                            <th>TableName</th>
                            <th>Por que?</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Client script</td>
                            <td>Client script</td>
                            <td>Verdadeiro</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                        </tr>

                        <tr>
                            <td>Client script</td>
                            <td>Client script</td>
                            <td>Verdadeiro</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
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
                    <h2>Cadastrar Regra</h2>
                    <GridFormFileds>
                        <input
                            placeholder="Nome"
                        />
                        <input
                            placeholder="Tipo"
                        />
                    </GridFormFileds>

                    <GridFormFileds>
                        <input
                            placeholder="Ativo"
                        />
                        <input
                            placeholder="Categoria"
                        />
                    </GridFormFileds>

                    <GridFormFileds>
                        <input
                            placeholder="Classificação"
                        />
                        <input
                            placeholder="Link Documentation"
                        />
                    </GridFormFileds>

                    <GridFormFileds>
                        <input
                            placeholder="Message"
                        />
                        <input
                            placeholder="Script Rule"
                        />
                    </GridFormFileds>

                    <GridFormFileds>
                        <input
                            placeholder="Severidade"
                        />
                        <input
                            placeholder="Sugestão"
                        />
                    </GridFormFileds>

                    <GridFormFileds>
                        <input
                            placeholder="TableName"
                        />
                        <input
                            placeholder="Por que?"
                        />
                    </GridFormFileds>
                    <button type="submit">
                        Cadastrar
                    </button>
                </Container>

            </Modal>
        </>
    );
}