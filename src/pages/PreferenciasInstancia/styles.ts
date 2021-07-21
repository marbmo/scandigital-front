import styled from "styled-components";

export const Div = styled.div`
    .linha {
        display: flex;
        flex-flow: row wrap;
        padding-right: 3rem;
        padding-left: 3rem;
    }

    .coluna-50 {
        width: 50%;
        display: flex;
        justify-content: space-between;
    }
`;