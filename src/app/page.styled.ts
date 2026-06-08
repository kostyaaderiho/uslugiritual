import { Typography, Divider as Divider_, Button } from 'antd';
import styled from 'styled-components';

import { H1Title, H2Title, Description } from '@/components';
import { breakpoints } from '@/constants';

export const Section = styled.div``;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BannerTitle = styled(H1Title)`
    color: #fff !important;
`;

export const BannerClose = styled(Typography.Text)`
    color: ${({ theme }) => theme.colorPrimary};
    font-size: inherit;
    font-family: inherit;
`;

export const Title = styled(Typography.Title)`
    font-family: --font-eb-garamond;
    font-weight: 300 !important;
    font-size: 48px !important;
    margin: 24px 0 !important;
`;

export const Divider = styled(Divider_).attrs({
    size: 'small',
})`
    min-width: 96px;
    width: 96px;
`;

export const BannerSection = styled.div`
    background-color: var(--ant-color-bg-spotlight);
`;

export const BannerLink = styled(Button)`
    margin-top: 32px;
    padding: 8px 40px;
`;

export const BannerBottomDivider = styled(Divider)`
    margin: 24px 0 0 !important;
`;

export const BannerDescription = styled(Typography.Paragraph)`
    text-align: center;
    color: #f9f8f5b3;
    font-size: 16px;
`;

export const Steps = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;

    @media (min-width: ${breakpoints.lg}) {
        flex-direction: row;
        gap: 64px;
    }
`;

export const StepNumber = styled(Typography.Text)`
    font-family: --font-eb-garamond;
    color: ${({ theme }) => theme.colorPrimary};
    font-size: 28px;
`;

export const StepTitle = styled(Typography.Title).attrs({
    level: 3,
})`
    font-family: --font-eb-garamond;
    font-size: 24px !important;
    font-weight: 300 !important;
    margin: 8px 0 !important;
`;

export const StepDescription = styled(Typography.Paragraph)`
    font-size: 14px !important;
`;

export const ContactUs = styled(Section)`
    background-color: var(--ant-color-bg-spotlight);

    & ${Title} {
        color: #fff !important;
    }
    & ${BannerDescription} {
        color: var(--ant-color-text-1);
    }
`;

export const ContactUsTitle = styled(H2Title)`
    color: #fff !important;
`;

export const ContactUsDescription = styled(Description)`
    text-align: center;
    color: #f9f8f5b3;
    font-size: 16px;
`;

export const ContactUsLinks = styled.div`
    display: flex;
    margin: 24px 0;
    flex-direction: column;
    width: 320px;
    gap: 24px;

    @media (min-width: ${breakpoints.lg}) {
        flex-direction: row;
        width: auto;
        gap: 16px;
    }
`;

export const ContactUsLink = styled(Button)`
    background: transparent;
    color: #fff;
    padding: 4px 32px;
    opacity: 0.9;
`;

export const ContactUsPhone = styled(Typography.Paragraph)`
    font-size: 22px;
    font-family: --font-eb-garamond;
    color: #fff;
`;
