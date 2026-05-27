import type { Metadata } from 'next';
import { ConfigProvider, ThemeConfig, Menu } from 'antd';

import { Open_Sans } from 'next/font/google';
import { Spectral } from 'next/font/google';

import GlobalStyles from '../styles/GlobalStyles';

const openSans = Open_Sans({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '700'],
    variable: '--font-roboto',
});

const spectral = Spectral({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-eb-garamond',
    weight: ['300', '400', '500', '600', '700'],
});

import { Header, Content, Footer, Layout } from '../components';

const theme: ThemeConfig = {
    token: {
        colorPrimary: '#af926a',
        colorText: '#696159',
        colorSplit: '#af926a',
        lineWidth: 1,
        margin: 24,
        fontFamily: 'Open Sans',
    },
    components: {
        Menu: {
            itemBg: 'none',
        },
        Layout: {
            headerBg: '#f9f8f6d9',
        },
    },
};

export const metadata: Metadata = {
    title: 'Ритуальные венки, каркасы для венков, искусственная ель для венков, ритуальные памятники, Беларусь, Минск, Могилев, Витебск, Гродно, Брест, Гомель',
    description:
        'Ритуальные венки, каркасы для венков, искусственная ель для венков, ритуальные памятники, Беларусь, Минск, Могилев, Витебск, Гродно, Брест, Гомель',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${openSans.variable} ${spectral.variable}`}>
            <body>
                <ConfigProvider theme={theme}>
                    <Layout>
                        <Header />
                        <Content>{children}</Content>
                        <Footer />
                    </Layout>
                    <GlobalStyles />
                </ConfigProvider>
            </body>
        </html>
    );
}
