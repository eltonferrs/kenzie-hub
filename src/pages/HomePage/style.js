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
`