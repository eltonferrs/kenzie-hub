import styled from "styled-components"

export const StyleInput= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    font-family: 'Inter',sans-serif;
    font-weight: 400;
    font-size: .75rem;
    color: var(--color-grey-0);
    input, select,option{
        text-align: start;
        border: none;
        border-radius: 4px;
        border: 1px solid var(--color-grey-1);
        font-size: .875rem;
        width: 100%;
        background-color: var(--color-grey-2);
        color: var(--color-grey-1);
        padding: 15px 0 10px 10px;
        margin: 10px 0;
        -webkit-text-fill-color: var(--color-grey-1);
    }
`