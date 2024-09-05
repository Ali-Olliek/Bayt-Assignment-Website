import React from 'react';
import LocalStorageService from '../services/LocalStorageService';
import { Navigate, Outlet } from 'react-router-dom';
import MainLayout from '../components/layouts/main-layout/MainLayout';
import UserLayout from '../components/layouts/user-layout/UserLayout';

export default function ProtectedRoute({
  adminsOnly,
  children,
}: {
  adminsOnly: boolean;
  children: React.ReactNode;
}) {
  const localStorageService = LocalStorageService.getInstance();

  const user = localStorageService.getUser();

  if (adminsOnly && !user?.isAdmin) return <h4>401, Forbidden!</h4>;

  return <>{children}</>;
}
