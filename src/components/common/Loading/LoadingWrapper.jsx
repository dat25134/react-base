import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../../store/slices/loadingSlice';
import Loading from './Loading';

const LoadingWrapper = ({ children }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {children}
      {isLoading && <Loading fullScreen />}
    </>
  );
};

export default LoadingWrapper; 