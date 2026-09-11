'use client'
import React from 'react'
import Image from 'next/image'

import { HeaderWrapper, UserName } from './styles'
import { Title } from '@/components/title'

export const Header = () => {

    return (
        <HeaderWrapper>
            <Image src="/LogoPamafa.svg" alt='Logo Pamafa' width={148} height={32} priority />
            <Title />

            <UserName>Danylo Henrique</UserName>
        </HeaderWrapper>
    )
}
