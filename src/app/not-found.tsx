'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div className='h-screen flex justify-center flex-col items-center'>
        <Image src="/images/404.svg" width={500} height={500} 
        alt='404 img' 
        />
        <Link href="/">
        <Button>back to home</Button>
        </Link>
    </div>
  )
}
