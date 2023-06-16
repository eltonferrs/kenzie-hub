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
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`