import styled from "styled-components";

export const Table = styled.div`

margin-top: 4rem;
    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child{
                color: var(--text-title);
            }
        }
    }

`;

export const Button = styled.div`

margin-top: 2rem;
padding-left: 2rem;

button {
        font-size: 1rem;
        color: #FFFFFF;
        background: var(--blue-light);
        border: 0 !important;
        padding: 0 2rem;
        border-radius: 0%.25rem;
        height: 3rem;
        border-bottom: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
}`;

export const Container = styled.form`

h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

input, select {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0%.25rem;
    margin-bottom: 1%;

    border: 1px solid #d7d7d7; 
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
        color: var(--text-body); 
    }
}`;

export const GridFormFileds = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;