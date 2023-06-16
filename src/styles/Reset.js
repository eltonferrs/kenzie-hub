import { createGlobalStyle } from "styled-components"

export const Reset=createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul,li{
        list-style: none;
    }
    button{
        cursor: pointer;
    }
    main{
        width: 100%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #root{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
`