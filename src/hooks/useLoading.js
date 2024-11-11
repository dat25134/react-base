import { useDispatch, useSelector } from 'react-redux';
import { showLoading, hideLoading, resetLoading, selectIsLoading } from '../store/slices/loadingSlice';

export const useLoading = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return {
    isLoading,
    showLoading: () => dispatch(showLoading()),
    hideLoading: () => dispatch(hideLoading()),
    resetLoading: () => dispatch(resetLoading()),
  };
}; 