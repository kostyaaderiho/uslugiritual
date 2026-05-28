import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --ant-background-1: #e9e6e2;
        --ant-background-2: #eeebe866;
        --ant-color-text-1: #f9f8f5b3;
    }

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
