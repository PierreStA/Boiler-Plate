'use client' // Error components must be Client Components
 
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { LoginButton } from '@/features/auth/LoginButton'

import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <Card className='max-w-lg m-auto mt-4'>
    <CardHeader>
        <CardTitle className='text-lg'> Please log to see this page </CardTitle>
    </CardHeader>
    <CardFooter>
        <LoginButton />
    </CardFooter>

</Card>
  )
}