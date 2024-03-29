import styled from "styled-components"

export const AddTechStyle= styled.div`
    background-color: var(--color-grey-2);
    h2{
        font-family: 'Inter',sans-serif;
        font-weight: 700;
        font-size: 1rem;
        color: var(--color-grey-0);
    }
    .modalHeader{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px 15px;

        button{
            width: fit-content;
            color: var(--color-grey-1);
            background-color: transparent;
            font-size: 1.5rem;
            padding: 0;
        }
        button:hover{
            background-color: transparent;
        }
    }
    form{
        padding: 15px;
        background-color: var(--color-grey-3);
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    button{
        width: 100%;
        border: none;
        font-family: 'Inter',sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        color: var(--color-grey-0);
        background-color: var(--color-primary);
        padding: 15px 0;
        border-radius: 4px;
    }
    button:hover{
        background-color: var(--color-primary-focus);
    }
`