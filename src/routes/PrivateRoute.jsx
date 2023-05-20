import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  
  if (loading) {
    return <LoadingSpinner/>
  }
  
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;