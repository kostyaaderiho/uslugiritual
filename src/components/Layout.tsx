'use client';

import { Layout as Layout_, theme } from 'antd';
import { ThemeProvider } from 'styled-components';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const { token } = theme.useToken();

    return (
        <ThemeProvider theme={token}>
            <Layout_
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
            >
                {children}
            </Layout_>
        </ThemeProvider>
    );
};
