import React from 'react'
import WelcomeBanner from './WelcomeBanner'
import { getCurrentUser } from '@/lib/session';
import { User } from '@prisma/client';
import Calendar from './Calendar';

const Portal = async () => {
  const user = await getCurrentUser();
  return (
    <>
    <WelcomeBanner user={user as User} />
    <Calendar/>
    </>
  )
}

export default Portal