'use client';

import { Layout, Typography } from 'antd';

import styled from 'styled-components';

const { Footer: Footer_ } = Layout;

const Sc = {
    Footer: styled(Footer_)`
        background-color: var(--ant-background-2);
        border-top: 1px solid ${({ theme }) => theme.colorBorder};
        padding: 0;
        margin-top: 80px;
    `,

    Sections: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 400px));
        justify-content: center;
        gap: 56px;
        padding: 56px 0;
    `,

    Section: styled.div``,

    Title: styled(Typography.Title).attrs({
        level: 3,
    })`
        font-family: --font-eb-garamond;
        font-weight: 300 !important;
        font-size: 20px !important;
        color: ${({ theme }) => theme.colorPrimary} !important;
    `,

    Description: styled(Typography.Paragraph)``,

    Copyright: styled.div`
        border-top: 1px solid ${({ theme }) => theme.colorBorder};
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px 0;
    `,
};

export const Footer = () => {
    return (
        <Sc.Footer>
            <Sc.Sections>
                <Sc.Section>
                    <Sc.Title level={3}>Ритуальная помощь</Sc.Title>
                    <Sc.Description>
                        Полный комплекс ритуальных услуг и изготовление траурных
                        венков и памятников.
                    </Sc.Description>
                </Sc.Section>
                <Sc.Section>
                    <Sc.Title level={3}>Контакты</Sc.Title>
                    УНП790634474 г.Могилев, ул.Северная 2-16 Р./c
                    BY33BLBB30120790634474001001 ВИК: BLBBBY2X, ЦКУ №1 дирекция
                    ОАО "Белинвестбанк" МФО 153001739 +375 (29) 215-17-17
                </Sc.Section>
                <Sc.Section>
                    <Sc.Title level={3}>Часы работы</Sc.Title>
                    <Sc.Description>
                        Ежедневно, без выходных 24/7
                    </Sc.Description>
                </Sc.Section>
            </Sc.Sections>

            <Sc.Copyright>
                <Typography.Text>
                    © 2026 Память. Все права защищены.
                </Typography.Text>
            </Sc.Copyright>
        </Sc.Footer>
    );
};
