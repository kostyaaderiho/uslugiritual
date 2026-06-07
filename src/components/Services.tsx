'use client';

import styled from 'styled-components';
import { Typography } from 'antd';

const Sc = {
    ServiceList: styled.ul`
        border-top: 1px solid ${({ theme }) => theme.colorBorder};
        list-style: none;
        margin: 64px auto;
        max-width: 800px;
        padding: 0;
    `,
    Service: styled.li`
        border-bottom: 1px solid ${({ theme }) => theme.colorBorder};
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
    `,
    ServiceTitle: styled(Typography.Text)``,
    ServicePrice: styled(Typography.Text)`
        font-family: --font-eb-garamond;
        color: ${({ theme }) => theme.colorPrimary};
        font-size: 18px;
    `,
};

export type Service = {
    title: string;
    price?: string;
};

export type ServicesProps = {
    services: Service[];
};

export const Services = ({ services }: ServicesProps) => {
    return (
        <Sc.ServiceList>
            {services.map((service) => (
                <Sc.Service key={service.title}>
                    <Sc.ServiceTitle>{service.title}</Sc.ServiceTitle>
                    {service.price && (
                        <Sc.ServicePrice>{service.price}</Sc.ServicePrice>
                    )}
                </Sc.Service>
            ))}
        </Sc.ServiceList>
    );
};
