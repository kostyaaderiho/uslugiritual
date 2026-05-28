import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    // antd base styles overrides
    .ant-btn {
        border-radius: 0 !important;
    }


    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: --ant-roboto-family, Arial, sans-serif;
    }


`;

export default GlobalStyles;
