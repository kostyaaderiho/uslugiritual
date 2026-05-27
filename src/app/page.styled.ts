import { Typography, Divider as Divider_ } from 'antd';
import styled from 'styled-components';

export const Section = styled.div`
    padding: 48px 0;
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BannerSection = styled(Section)`
    background-color: #e9e6e2;
`;

export const SubTitle = styled(Typography.Paragraph)`
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorPrimary};
`;

export const MainTitle = styled(Typography.Title)`
    font-family: --font-eb-garamond;
    font-weight: 300 !important;
    font-size: 60px !important;
    margin: 24px 0 !important;
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
    margin: 0 0 24px !important;
`;

export const BannerBottomDivider = styled(Divider)`
    margin: 24px 0 0 !important;
`;

export const Description = styled(Typography.Paragraph)`
    text-align: center;
`;

export const ContactUsSection = styled(Section)`
    background-color: #696159;

    & ${Title} {
        color: #fff !important;
    }

    & ${Description} {
        color: #fff !important;
    }
`;

export const Steps = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
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
