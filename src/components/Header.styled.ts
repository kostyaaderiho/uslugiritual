import styled from 'styled-components';
import { Button, Layout, Typography } from 'antd';

export const Container = styled(Layout.Header)`
    border-bottom: 1px solid ${({ theme }) => theme.colorBorder};
    padding: 0 !important;
`;

export const LogoBorder = styled.div`
    border: 1px solid ${({ theme }) => theme.colorText};
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border 0.3s;
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        border: 1px solid ${({ theme }) => theme.colorPrimary};
        transition: width 0.3s;
        position: absolute;
        bottom: -5px;
    }
`;

export const Content = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
    height: 64px;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colorText};
    align-items: center;
    gap: 8px;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colorPrimary} !important;

        > ${LogoBorder} {
            border: 1px solid ${({ theme }) => theme.colorPrimary};

            &::after {
                width: 32px;
            }
        }
    }
`;

export const LogoAllText = styled.div`
    font-family: --font-eb-garamond;
    font-weight: 300;
`;

export const LogoText = styled(Typography.Paragraph)`
    color: inherit !important;
    margin: 0 !important;
`;

export const LogoTextToMain = styled(LogoText)`
    text-transform: uppercase;
    font-size: 10px;
`;

export const Contacts = styled.div`
    display: flex;
    gap: 8px;
`;

export const MenuButton = styled(Button)`
    flex-shrink: 0;
`;
