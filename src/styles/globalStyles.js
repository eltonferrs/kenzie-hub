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
}

body{
	background-color: var(--color-grey-4);
}
`