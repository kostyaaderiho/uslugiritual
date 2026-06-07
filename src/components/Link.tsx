import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import styled from 'styled-components';

const Sc = {
    Link: styled(NextLink)`
        text-transform: uppercase;
        color: ${({ theme }) => theme.colorText};

        &:hover {
            color: ${({ theme }) => theme.colorPrimary};
        }
    `,
};

export type LinkProps = NextLinkProps & {
    children: React.ReactNode;
};

export const Link = ({ children, ...rest }: LinkProps) => {
    return <Sc.Link {...rest}>{children}</Sc.Link>;
};
