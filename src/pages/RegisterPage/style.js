import styled from "styled-components"

export const StyleRegister= styled.div`
    margin-top:40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items:center;
    max-width: 370px;
    .header{
        display: flex;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
    h2{
        text-align: center;
        color: var(--color-grey-0);
        font-family: 'Inter',sans-serif;
        font-weight: 700;
        font-size: 1rem;
    }
    p{
        text-align: center;
        color: var(--color-grey-1);
        font-family: 'Inter',sans-serif;
        font-weight: 400;
        font-size: .75rem;
    }
    button,a{
        text-align: center;
        text-decoration: none;
        padding: 12px 0;
        width: 100%;
        font-family: 'Inter',sans-serif;
        font-weight: 400;
        font-size: .875rem;
        border: none;
        border-radius: 4px;
        color: var(--color-grey-0);
        background-color: var(--color-grey-3);
    }
    a{
        max-width: 68px;
    }
    form{
        margin-top: 25px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        padding: 55px 20px 20px;
        border-radius: 4px;
        background-color: var(--color-grey-3);
        button{
            background-color: var(--color-primary-negative);
        }
        button:hover{
            background-color: var(--color-primary);
        }
    }

`