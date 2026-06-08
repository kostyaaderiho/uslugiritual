'use client';

import {
    CentralizedContainer,
    SubTitle,
    Description,
    H1Title,
    H2Title,
    Prices,
    Services,
    Service,
} from '@/components';

const services: Service[] = [
    {
        title: 'Консультация круглосуточно',
        price: 'от 120 BYN',
    },
    {
        title: 'Автобус для близких на церемонию прощания (до 20 чел)',
        price: 'от 180 BYN',
    },
    {
        title: 'Копка могилы',
        price: 'от 250 BYN',
    },
    {
        title: 'Аренда зала для церемонии прощания (час',
        price: 'от 80 BYN',
    },
    {
        title: 'Перевозка тела в морг',
        price: 'от 90 BYN',
    },
    {
        title: 'Оформление документов',
        price: 'от 60 BYN',
    },
];

export default function Page() {
    return (
        <CentralizedContainer>
            <SubTitle $centered>Стоимость</SubTitle>
            <H1Title>Тарифы и цены</H1Title>
            <Description>
                Готовые комплексы услуг для организации похорон и стоимость
                отдельных услуг. Берём на себя всё — от документов до
                поминального обеда.
            </Description>

            <Prices />

            <SubTitle>Дополнительно</SubTitle>
            <H2Title>Отдельные услуги</H2Title>
            <Services services={services} />
            <Description>
                Стоимость уточняется индивидуально. Возможна рассрочка и помощь
                с получением государственного пособия.
            </Description>
        </CentralizedContainer>
    );
}
