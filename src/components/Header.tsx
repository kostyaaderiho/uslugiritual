'use client';

import { Layout, Menu, Button, Divider } from 'antd';
import Link from 'next/link';
import {
    MessageOutlined,
    WhatsAppOutlined,
    PhoneOutlined,
    SendOutlined,
} from '@ant-design/icons';

import Logo from '../assets/icons/logo.svg';

import { CentralizedContainer } from './CentralizedContainer';
import * as Sc from './Header.styled';

const { Header: Header_ } = Layout;
const { SubMenu } = Menu;

export const Header = () => (
    <Header_ style={{ padding: 0 }}>
        <CentralizedContainer>
            <Sc.Content>
                <Link href="/">
                    <Sc.LogoContainer>
                        <Sc.LogoBorder>
                            <Logo width="30" height="30" />
                        </Sc.LogoBorder>
                        <Sc.LogoText>Ритуальная помощь</Sc.LogoText>
                    </Sc.LogoContainer>
                </Link>

                <Menu mode="horizontal" style={{ border: 0, flex: 1 }}>
                    <Menu.Item key="home">
                        <Link href="/">Главная</Link>
                    </Menu.Item>
                    {/* <SubMenu key="Ritual_Services" title="Ритуальные Услуги">
                        <Menu.Item key="service1">
                            Организация похорон
                        </Menu.Item>
                        <Menu.Item key="service2">Перевозка тела</Menu.Item>
                        <Menu.Item key="service3">Копка могил</Menu.Item>
                        <Menu.Item key="service4">
                            Аренда ритуального зала
                        </Menu.Item>
                    </SubMenu> */}
                    <SubMenu key="Ritual_Stuff" title="Ритуальные Товары">
                        <Menu.Item key="wreaths">
                            <Link href="/wreaths">Венки</Link>
                        </Menu.Item>
                        <Menu.Item key="monuments">
                            <Link href="/monuments">Памятники</Link>
                        </Menu.Item>
                        <Menu.Item key="caskets">
                            <Link href="/caskets">Гробы</Link>
                        </Menu.Item>
                        <Menu.Item key="firs">
                            <Link href="/firs">Ель</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="price">
                        <Link href="/prices">Стоимость</Link>
                    </Menu.Item>
                    <Menu.Item key="contacts">
                        <Link href="/contacts">Контакты</Link>
                    </Menu.Item>
                </Menu>

                <Sc.Contacts>
                    <Button
                        type="text"
                        href="https://example.com"
                        icon={<MessageOutlined />}
                    />
                    <Button
                        type="text"
                        href="https://example.com"
                        icon={<SendOutlined />}
                    />
                    <Button
                        type="text"
                        href="https://example.com"
                        icon={<WhatsAppOutlined />}
                    />
                </Sc.Contacts>
                <Divider orientation="vertical" />
                <Button
                    type="text"
                    icon={<PhoneOutlined />}
                    href="https://example.com"
                >
                    +375 (29) 000-00-00
                </Button>
            </Sc.Content>
        </CentralizedContainer>
    </Header_>
);
