import styled from "styled-components"

export const StyleLoginPage= styled.div`
    margin-top:40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items:center;
    max-width: 370px;
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
        background-color: var(--color-grey-1);
    }
    button:hover{
        background-color: var(--color-grey-2);
    }
    .box{
        margin-top: 25px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        background-color: var(--color-grey-3);
        padding: 25px 20px;
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        button{
            background-color: var(--color-primary-focus);
        }
        button:hover{
            background-color: var(--color-primary);
        }
    }
`