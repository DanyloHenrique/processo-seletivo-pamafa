'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

import { TitleWrapper } from './styles.js'

export const Title = ({ bigVariant = false, className }) => {
    const pathname = usePathname()

    let number = '01'
    if (pathname !== '/') {
        number = pathname.slice(-2)
    }

    return (
        <TitleWrapper $isBig={bigVariant} className={className}>Exercício {number}</TitleWrapper>
    )
}


