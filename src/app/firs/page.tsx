import { notFound } from 'next/navigation';

import {
    CentralizedContainer,
    H1Title,
    SubTitle,
    Description,
    Product,
    Products,
    WholeSalePurchase,
} from '@/components';
import { getEls } from '@/api/contentful';
import { isResponseError } from '@/types';

export default async function Page() {
    const response = await getEls();

    if (isResponseError(response)) {
        notFound();
    }

    const { items: products } = response;

    return (
        <CentralizedContainer>
            <SubTitle>Каталог</SubTitle>
            <H1Title>Ель для венков</H1Title>
            <Description>
                Ель для изготовления траурных венков и ритуального оформления.
                Работаем с мастерскими и частными заказчиками, возможна покупка
                оптом.
            </Description>

            <Products>
                {products.map(({ fields, sys }) => (
                    <Product
                        key={sys.id}
                        title={fields.title}
                        description={fields.description}
                        price={fields.price}
                        // TODO: update size field in contentful and remove hardcoded value
                        sizes=""
                        imgSrc={
                            `https:${fields.images[0]?.fields.file?.url}` || ''
                        }
                        href={`/firs/${sys.id}`}
                    />
                ))}
            </Products>

            <WholeSalePurchase
                title="Возможна покупка оптом"
                description="Работаем с ритуальными агентствами, мастерскими и организациями. При заказе от 10 елей — специальные цены, отсрочка платежа и доставка по области. Свяжитесь с нами для индивидуального расчёта."
            />
        </CentralizedContainer>
    );
}
