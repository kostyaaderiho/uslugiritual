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
import { getWreaths } from '@/api/contentful';
import { isResponseError } from '@/types';

export default async function Page() {
    const response = await getWreaths();

    if (isResponseError(response)) {
        notFound();
    }

    const { items: products } = response;

    return (
        <CentralizedContainer>
            <SubTitle>Каталог</SubTitle>
            <H1Title>Траурные венки</H1Title>
            <Description>
                Венки из живых и искусственных цветов. Изготавливаем в день
                обращения, доставляем по Могилеву и области.
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
                        href={`/wreaths/${sys.id}`}
                    />
                ))}
            </Products>

            <WholeSalePurchase
                title="Возможна покупка оптом"
                description="Работаем с ритуальными агентствами, мастерскими и организациями. При заказе от 10 венков — специальные цены, отсрочка платежа и доставка по области. Свяжитесь с нами для индивидуального расчёта."
            />
        </CentralizedContainer>
    );
}
