import styled from 'styled-components';
import { Divider } from 'antd';

import {
    CentralizedContainer,
    ProductDetails,
    SimilarProducts,
} from '@/components';
import { getEl } from '@/api/contentful';
import { isResponseError } from '@/types';
import { notFound } from 'next/navigation';

const Sc = {
    Divider: styled(Divider)`
        margin: 64px 0 !important;
    `,
};

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const response = await getEl(id);

    if (isResponseError(response)) {
        notFound();
    }

    return (
        <CentralizedContainer>
            <ProductDetails
                {...response.fields}
                // TODO: update size field in contentful and remove hardcoded value
                size=""
                category="Ель для венков"
                imageSrc={`https:${response.fields.images[0]?.fields.file?.url || ''}`}
            />

            <Sc.Divider size="medium" />

            {/* <SimilarProducts href="/firs" products={products} /> */}
        </CentralizedContainer>
    );
}
