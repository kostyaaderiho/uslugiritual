import styled from 'styled-components';

export const CentralizedContainer = styled.div<{ $withOffset?: boolean }>`
    margin: 0 auto;
    max-width: 1400px;
    padding: ${({ $withOffset = true }) =>
        $withOffset ? '80px 32px' : '0 32px'};
    box-sizing: border-box;
`;
