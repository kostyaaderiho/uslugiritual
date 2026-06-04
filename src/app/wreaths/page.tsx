import {
    CentralizedContainer,
    MainTitle,
    SubTitle,
    Description,
    Product,
    Products,
    WholeSalePurchase,
} from '../../components';

export default function Page() {
    const products = [
        {
            id: '1',
            title: 'Венок «Светлая память»',
            description:
                'Белые розы и лилии на каркасе из живой зелени. Символ чистоты и вечной памяти.',
            sizes: 'Ø 60 см',
            price: 'От 4500р',
            imgSrc: '/images/wreath-1-CQt_nJKf.jpg',
        },
        {
            id: '2',
            title: 'Венок «Светлая память»',
            description:
                'Белые розы и лилии на каркасе из живой зелени. Символ чистоты и вечной памяти.',
            sizes: 'Ø 60 см',
            price: 'От 4500р',
            imgSrc: '/images/wreath-1-CQt_nJKf.jpg',
        },
        {
            title: 'Венок «Светлая память»',
            description:
                'Белые розы и лилии на каркасе из живой зелени. Символ чистоты и вечной памяти.',
            sizes: 'Ø 60 см',
            price: 'От 4500р',
            imgSrc: '/images/wreath-1-CQt_nJKf.jpg',
        },
        {
            id: '4',
            title: 'Венок «Светлая память»',
            description:
                'Белые розы и лилии на каркасе из живой зелени. Символ чистоты и вечной памяти.',
            sizes: 'Ø 60 см',
            price: 'От 4500р',
            imgSrc: '/images/wreath-1-CQt_nJKf.jpg',
        },
    ];

    return (
        <CentralizedContainer>
            <SubTitle>Каталог</SubTitle>
            <MainTitle>Траурные венки</MainTitle>
            <Description>
                Венки из живых и искусственных цветов. Изготавливаем в день
                обращения, доставляем по Могилеву и области.
            </Description>
            <Products>
                {products.map((product) => (
                    <Product
                        key={product.title}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        sizes={product.sizes}
                        imgSrc={product.imgSrc}
                        href={`/wreaths/${product.id}`}
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
