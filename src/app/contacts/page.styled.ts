import styled from 'styled-components';
import { Typography } from 'antd';
import { breakpoints } from '@/constants';

export const Contacts = styled.div`
    display: flex;
    gap: 16px;
    margin: 48px 0 24px;
    flex-direction: column;

    @media (min-width: ${breakpoints.lg}) {
        flex-direction: row;
        gap: 48px;
    }
`;

export const Contact = styled.div`
    height: 220px;
    border: 1px solid ${({ theme }) => theme.colorBorder};
    padding: 24px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    flex: 1;

    &:hover {
        box-shadow: 0 8px 32px 8px rgba(0, 0, 0, 0.05);
    }
`;

export const IconWrapper = styled.div`
    border-radius: 50%;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eeebe8;
    margin: 0 auto 20px;
    flex-shrink: 0;
`;

export const Title = styled(Typography.Paragraph)`
    font-size: 18px;
    text-align: center;
    font-weight: 300;
    font-family: --font-eb-garamond;
`;

export const Description = styled(Typography.Paragraph)`
    font-size: 14px;
    text-align: center;
`;

export const CallSpecialist = styled.div`
    background-color: #eeebe880;
    padding: 64px;
`;
