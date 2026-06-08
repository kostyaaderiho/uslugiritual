import { Button } from 'antd';
import styled from 'styled-components';

const Sc = {
    Container: styled.div`
        text-align: center;
    `,

    Link: styled(Button)`
        margin: 24px auto;
        padding: 12px 40px !important;
        display: inline-block;
        box-sizing: border-box;
        height: auto;
        text-transform: uppercase;
    `,
};

export type CallButtonProps = {
    className?: string;
    children?: React.ReactNode;
};

export const CallButton = ({
    className,
    children = 'Связаться',
}: CallButtonProps) => (
    <Sc.Container className={className}>
        <Sc.Link
            type="primary"
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
        >
            {children}
        </Sc.Link>
    </Sc.Container>
);
