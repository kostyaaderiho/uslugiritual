import styled from 'styled-components';
import { Button, Typography } from 'antd';

import { breakpoints } from '@/constants';

export const Prices = styled.div`
    display: flex;
    gap: 48px;
    margin: 48px 0 24px;
    flex-direction: column;

    @media (min-width: ${breakpoints.lg}) {
        flex-direction: row;
    }
`;

export const Price = styled.article<{ $isPopular: boolean }>`
    height: 560px;
    border: 1px solid
        ${({ theme, $isPopular }) =>
            $isPopular ? theme.colorSplit : theme.colorBorder};
    padding: 24px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    flex: 1;

    &:hover {
        box-shadow: 0 8px 32px 8px rgba(0, 0, 0, 0.05);
    }
`;

export const PriceButton = styled(Button)`
    margin: 16px 0 0;

    @media (min-width: ${breakpoints.lg}) {
        margin-top: auto;
    }
`;

export const PricePopular = styled.span`
    align-self: flex-start;
    padding: 4px 16px;
    color: #fff;
    background-color: ${({ theme }) => theme.colorSplit};
    text-transform: uppercase;
    font-size: 10px;
`;

export const PriceTitle = styled(Typography.Title).attrs({
    level: 3,
})`
    font-family: --font-eb-garamond;
    font-weight: 300 !important;
    font-size: 30px !important;
    margin: 16px 0;
`;

export const PriceDescription = styled(Typography.Paragraph)``;

export const PriceNumber = styled(Typography.Paragraph)`
    font-family: --font-eb-garamond;
    font-size: 30px;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 0 !important;
`;

export const PriceServices = styled.ul`
    margin: 0;
`;

export const PriceService = styled.li``;
