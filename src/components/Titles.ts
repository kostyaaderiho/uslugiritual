'use client';

import { Typography } from 'antd';
import styled from 'styled-components';

export const MainTitle = styled(Typography.Title)`
    font-family: --font-eb-garamond;
    font-weight: 300 !important;
    font-size: 60px !important;
    margin: 0 !important;
    text-align: center;
`;

export const SubTitle = styled(Typography.Paragraph)`
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
`;

export const Description = styled(Typography.Paragraph)`
    text-align: center;
    font-size: 16px;
    margin: 16px 0 0 !important;
`;

export const ServiceList = styled.ul`
    border-top: 1px solid ${({ theme }) => theme.colorBorder};
    list-style: none;
    margin: 64px auto;
    max-width: 800px;
    padding: 0;
`;

export const Service = styled.li`
    border-bottom: 1px solid ${({ theme }) => theme.colorBorder};
    padding: 20px 0;
    font-size: 16px;
`;
