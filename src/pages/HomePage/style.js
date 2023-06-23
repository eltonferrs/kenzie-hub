import styled from "styled-components"

export const StyleHomePage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .box{
        width: 80%;
        max-width: 1000px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    header,nav{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 40px 0;
        border-bottom: 1.5px solid var(--color-grey-2);
        p{
            color: var(--color-grey-1);
        }
        
    }
    nav{
        position: sticky;
        top: 0;
        background-color: var(--color-grey-4);
    }
    h2,p{
        font-family: 'Inter',sans-serif;
        font-weight: 400;
        color: var(--color-grey-0);
    }
    section{
        width: 80%;
        max-width: 1000px;
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap:20px;
    }
    a{
        text-align: center;
        text-decoration: none;
        padding: 12px 0;
        font-family: 'Inter',sans-serif;
        font-weight: 400;
        width: 100%;
        max-width: 68px;
        font-size: .875rem;
        border: none;
        border-radius: 4px;
        color: var(--color-grey-0);
        background-color: var(--color-grey-2);
    }
    a:hover{
        background-color: var(--color-grey-3);
    }
    ul{
        padding: 20px 0 0 0;
        background-color: var(--color-grey-2);
        width: 100%;
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: center;
        border-radius: 4px;
    }
    li{
        width: 95%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: var(--color-grey-4);
        padding: 20px;
        margin-bottom: 10px;
        cursor: pointer;
        border-radius: 4px;
        
    }
    li:hover{
        background-color: var(--color-grey-3);
    }
    .addTech{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .status{
        color: var(--color-grey-1);
    }
    .newTech{
        padding: 7px 10px;
        font-family: 'Inter',sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
        border: none;
        border-radius: 4px;
        color: var(--color-grey-0);
        background-color: var(--color-grey-2);
    }
    .newTech:hover{
        background-color: var(--color-grey-3);
    }
`