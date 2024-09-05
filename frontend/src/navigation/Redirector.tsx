import React from 'react';
import LocalStorageService from '../services/LocalStorageService';
import { Navigate, Outlet } from 'react-router-dom';
import MainLayout from '../components/layouts/main-layout/MainLayout';
import UserLayout from '../components/layouts/user-layout/UserLayout';

export default function Redirector() {
  const localStorageService = LocalStorageService.getInstance();

  const user = localStorageService.getUser();

  if (!user) return <Navigate to={'/sign-in'} replace />;

  return (
    <UserLayout>
      <Outlet />
    </UserLayout>
  );
}
