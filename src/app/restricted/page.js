"use client";
// pages/restricted.js

import React, { useContext, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { AuthContext } from '../utils/AuthContext';
import Cookies from 'js-cookie';

console.log('Restricted page');
const token = Cookies.get('token');
console.log(token)


const RestrictedPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log('Not authenticated');
      router.push('/registration');

      console.log(isAuthenticated);
    }
  },[isAuthenticated, router]);

  return isAuthenticated ? <div>Restricted Content</div> : null;
};

export default RestrictedPage;
