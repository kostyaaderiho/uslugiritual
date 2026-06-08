'use client';

import { Typography } from 'antd';
import styled from 'styled-components';

export const H1Title = styled(Typography.Title).attrs({
    level: 1,
})`
    font-family: --font-eb-garamond;
    font-weight: 300 !important;
    font-size: 48px !important;
    margin: 0 !important;
    text-align: center;
`;

export const H2Title = styled(Typography.Title).attrs({
    level: 2,
})`
    font-family: --font-eb-garamond;
    font-weight: 300 !important;
    font-size: 36px !important;
    margin: 0 !important;
    text-align: center;
`;

export const SubTitle = styled(Typography.Paragraph)<{ $centered?: boolean }>`
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorPrimary};
    font-size: 16px;
    text-align: ${({ $centered = true }) => ($centered ? 'center' : 'left')};
`;

export const Description = styled(Typography.Paragraph)`
    text-align: center;
    font-size: 16px;
    margin: 16px auto 0 !important;
    max-width: 640px;
`;
