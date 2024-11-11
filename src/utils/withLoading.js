import { store } from '../store';
import { showLoading, hideLoading } from '../store/slices/loadingSlice';

export const withLoading = async (asyncFunction) => {
  store.dispatch(showLoading());
  try {
    return await asyncFunction();
  } finally {
    store.dispatch(hideLoading());
  }
}; 