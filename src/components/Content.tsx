'use client';

import { Layout } from 'antd';

const { Content: Content_ } = Layout;

export const Content = ({ children }: { children: React.ReactNode }) => {
    return <Content_ style={{ flex: 1 }}>{children}</Content_>;
};
