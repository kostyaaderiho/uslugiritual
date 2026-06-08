'use client';

import { Menu, Button, Divider, Drawer, Grid } from 'antd';
import Link from 'next/link';
import {
    MessageOutlined,
    WhatsAppOutlined,
    PhoneOutlined,
    SendOutlined,
    MenuOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

const { useBreakpoint } = Grid;
const { SubMenu } = Menu;

import Logo from '../assets/icons/logo.svg';

import { CentralizedContainer } from './CentralizedContainer';
import * as Sc from './Header.styled';

export const Header = () => {
    const [visible, setVisible] = useState(false);
    const screens = useBreakpoint();

    const showDrawer = () => setVisible(true);
    const onClose = () => setVisible(false);

    const menuItems = (
        <>
            <Menu.Item key="home">
                <Link href="/">Главная</Link>
            </Menu.Item>
            <SubMenu key="Ritual_Services" title="Ритуальные Услуги">
                <Menu.Item key="service-1">
                    <Link href="/organization-of-funerals">
                        Организация похорон
                    </Link>
                </Menu.Item>
                <Menu.Item key="service-2">
                    <Link href="/transport">Перевозка тела</Link>
                </Menu.Item>
                <Menu.Item key="service-3">
                    <Link href="/grave-digging">Копка могил</Link>
                </Menu.Item>
                <Menu.Item key="service-4">
                    <Link href="/ritual-hall-rental">
                        Аренда ритуального зала
                    </Link>
                </Menu.Item>
            </SubMenu>
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
        </>
    );

    return (
        <Sc.Container>
            <CentralizedContainer $withOffset={false}>
                <Sc.Content>
                    <Link href="/">
                        <Sc.LogoContainer>
                            <Sc.LogoBorder>
                                <Logo width="30" height="30" />
                            </Sc.LogoBorder>
                            {screens.xl ? (
                                <Sc.LogoAllText>
                                    <Sc.LogoText>Ритуальная помощь</Sc.LogoText>
                                    <Sc.LogoTextToMain>
                                        На главную →
                                    </Sc.LogoTextToMain>
                                </Sc.LogoAllText>
                            ) : null}
                        </Sc.LogoContainer>
                    </Link>

                    {screens.lg ? (
                        <Menu mode="horizontal" style={{ border: 0, flex: 1 }}>
                            {menuItems}
                        </Menu>
                    ) : (
                        <>
                            <Drawer
                                title="Меню"
                                placement="left"
                                onClose={onClose}
                                open={visible}
                                bodyStyle={{ padding: 0 }}
                            >
                                <Menu
                                    mode="inline"
                                    style={{ height: '100%', borderRight: 0 }}
                                    onClick={onClose}
                                >
                                    {menuItems}
                                </Menu>
                            </Drawer>
                        </>
                    )}

                    {screens.xl ? (
                        <>
                            <Sc.Contacts>
                                <Button
                                    type="text"
                                    href="https://example.com"
                                    icon={
                                        <MessageOutlined
                                            style={{ fontSize: '16px' }}
                                        />
                                    }
                                />
                                <Button
                                    type="text"
                                    href="https://example.com"
                                    icon={
                                        <SendOutlined
                                            style={{ fontSize: '16px' }}
                                        />
                                    }
                                />
                                <Button
                                    type="text"
                                    href="https://example.com"
                                    icon={
                                        <WhatsAppOutlined
                                            style={{ fontSize: '16px' }}
                                        />
                                    }
                                />
                            </Sc.Contacts>
                            <Divider orientation="vertical" />
                        </>
                    ) : null}

                    <Button
                        type="text"
                        icon={<PhoneOutlined />}
                        href="https://example.com"
                    >
                        +375 (29) 540-19-19
                    </Button>

                    {screens.lg ? null : (
                        <Sc.MenuButton
                            type="primary"
                            icon={<MenuOutlined />}
                            onClick={showDrawer}
                            size="large"
                        />
                    )}
                </Sc.Content>
            </CentralizedContainer>
        </Sc.Container>
    );
};
