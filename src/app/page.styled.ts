import { Typography, Divider as Divider_, Button } from 'antd';
import styled from 'styled-components';

export const Section = styled.div`
    padding: 48px 0;
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

export const BannerSection = styled.div`
    background-color: var(--ant-background-1);
`;

export const BannerLink = styled(Button)`
    margin-top: 32px;
    padding: 8px 40px;
`;

export const BannerBottomDivider = styled(Divider)`
    margin: 24px 0 0 !important;
`;

export const Description = styled(Typography.Paragraph)`
    text-align: center;
`;

export const Steps = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 64px;
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

export const Prices = styled.div`
    display: flex;
    gap: 48px;
    margin: 48px 0 24px;
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
    margin-top: auto;
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
`;

export const PriceServices = styled.ul`
    margin: 0;
`;

export const PriceService = styled.li``;

export const ContactUs = styled(Section)`
    background-color: var(--ant-color-bg-spotlight);

    & ${Title} {
        color: #fff !important;
    }
    & ${Description} {
        color: var(--ant-color-text-1);
    }
`;

export const ContactUsLinks = styled.div`
    display: flex;
    gap: 16px;
    margin: 24px 0;
`;

export const ContactUsLink = styled(Button)`
    background: transparent;
    color: #fff;
    padding: 4px 32px;
    opacity: 0.8;
`;

export const ContactUsPhone = styled(Typography.Paragraph)`
    font-size: 22px;
    font-family: --font-eb-garamond;
    color: var(--ant-color-text-1);
`;
