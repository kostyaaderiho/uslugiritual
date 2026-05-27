import styled from 'styled-components';

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
    gap: 32px;
    align-items: center;
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

export const LogoText = styled.div`
    display: flex;
    color: inherit !important;
    align-items: center;
    gap: 8px;
`;

export const Contacts = styled.div``;
