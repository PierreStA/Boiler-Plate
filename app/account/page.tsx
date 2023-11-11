import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { getAuthSession } from '@/lib/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { LogoutButton } from '@/features/auth/LogoutButton';

export default async function AccountPage() {
 const session = await getAuthSession();

 if (!session) {
   return new Error('No session');
 }

  const user = session.user;

  return (
    <Card className='max-w-lg m-auto mt-4'>
      <CardHeader className='flex flex-row gap-4 space-y-0'>
        <Avatar>
            <AvatarFallback>{user.email?.[0]}</AvatarFallback>
            {user.image && (
              <AvatarImage
                src={user.image}
                alt={user.name ?? 'user picture'}
              />
            )}

        </Avatar>
        <div className='flex flex-col gap-1'>
        <CardTitle>{user.email}</CardTitle>
        <CardDescription>{user.name}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
            <Link className={buttonVariants({variant:"outline",size:"lg"})} href="/account/settings" >
                Settings
            </Link>
            <Link className={buttonVariants({variant:"outline",size:"lg"})} href="/admin" >
                Admin
            </Link>
      </CardContent>
      <CardFooter className='flex flex-row-reverse'>
        <LogoutButton />
      </CardFooter>
    </Card>
  );
}
