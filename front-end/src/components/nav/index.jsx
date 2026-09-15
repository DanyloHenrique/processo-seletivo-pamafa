'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import { SidebarWrapper, ContainerLogo, Nav as NavStyled, UlList, LiItem, LinkNav } from './styles'

const menuNavigation = [
    { path: '/', text: 'Exercício 01' },
    { path: '/exercicio02', text: 'Exercício 02' },
    { path: '/exercicio03', text: 'Exercício 03' },
    { path: '/exercicio04', text: 'Exercício 04' },
    { path: '/exercicio05', text: 'Exercício 05' },
    { path: '/exercicio06', text: 'Exercício 06' },
    { path: '/exercicio07', text: 'Exercício 07' },
    { path: '/exercicio08', text: 'Exercício 08' },
]


export const Nav = () => {
    const currentPath = usePathname()

    return (
        <SidebarWrapper>
            <ContainerLogo>
                <Image src="/LogoPamafa.svg" alt='Logo Pa' width={220} height={48} priority />
            </ContainerLogo>

            <NavStyled>
                <UlList>
                    {menuNavigation.map((item) => <LiItem $isActive={currentPath === item.path} key={item.path}> <LinkNav href={item.path}>{item.text}</LinkNav> </LiItem>)}
                </UlList>
            </NavStyled>
        </SidebarWrapper>
    )
}
