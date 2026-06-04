import {
    CentralizedContainer,
    MainTitle,
    SubTitle,
    Description,
    Product,
} from '../../components';

export default function Page() {
    return (
        <CentralizedContainer>
            <SubTitle>Каталог</SubTitle>
            <MainTitle>Траурные венки</MainTitle>
            <Description>
                Венки из живых и искусственных цветов. Изготавливаем в день
                обращения, доставляем по Могилеву и области.
            </Description>
            <div>
                <Product
                    title={'Венок «Светлая память»'}
                    sizes="Ø 60 см"
                    description={
                        'Белые розы и лилии на каркасе из живой зелени. Символ чистоты и вечной памяти.'
                    }
                    price={'От 4500р'}
                    imgSrc=""
                />
            </div>
        </CentralizedContainer>
    );
}
