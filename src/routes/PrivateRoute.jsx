import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location =useLocation()
  if (loading) {
    return <LoadingSpinner/>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;