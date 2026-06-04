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

export const CallButton = () => {
    return (
        <Sc.Container>
            <Sc.Link
                type="primary"
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
            >
                Связаться +375 (29) 000-00-00
            </Sc.Link>
        </Sc.Container>
    );
};
