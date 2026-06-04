'use client';

import styled from 'styled-components';
import { Typography } from 'antd';

const Sc = {
    Container: styled.div`
        padding: 32px;
        border: 1px solid ${({ theme }) => theme.colorBorder};
        box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.05);
        text-align: center;
        max-width: 720px;
        margin: 0 auto;
    `,
    SubTitle: styled(Typography.Title).attrs({
        level: 4,
    })`
        font-family: --font-eb-garamond;
        font-weight: 300 !important;
        font-size: 16px !important;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colorPrimary} !important;
        margin: 0 0 8px;
    `,
    Title: styled(Typography.Title)`
        font-family: --font-eb-garamond;
        font-weight: 300 !important;
        margin: 0 !important;
    `,

    Description: styled(Typography.Paragraph)`
        margin-top: 16px !important;
    `,
};

type WholeSalePurchaseProps = {
    title: string;
    description: string;
};

export const WholeSalePurchase = ({
    title,
    description,
}: WholeSalePurchaseProps) => {
    return (
        <Sc.Container>
            <Sc.SubTitle>Оптовые заказы</Sc.SubTitle>
            <Sc.Title level={2}>{title}</Sc.Title>
            <Sc.Description>{description}</Sc.Description>
        </Sc.Container>
    );
};
