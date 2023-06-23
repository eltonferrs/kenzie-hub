import { createGlobalStyle, css } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    :root {
	--color-primary: #ff577f;
	--color-primary-focus: #ff427f;
	--color-primary-negative: #59323f;
	--color-grey-4: #121214;
	--color-grey-3: #212529;
	--color-grey-2: #343b41;
	--color-grey-1: #868e96;
	--color-grey-0: #f8f9fa;
	--color-sucess: #3fe864;
	--color-negative: #e83f5b;
	--toastify-color-success: var(--color-sucess);
	--toastify-color-error: var(--color-negative);
	--toastify-color-light: var(--color-grey-2); 
	--toastify-text-color-light: var(--color-grey-0);
	
}

body{
	background-color: var(--color-grey-4);
}

.modal-content{
    width: 90%;
    max-width: 370px;
    height: fit-content;
    border: none;
}
.modal-overlay{
    background-color: rgba(0,2,1,0.4);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
 	justify-content: center;
}
`