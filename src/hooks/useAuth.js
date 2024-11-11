import { useDispatch, useSelector } from 'react-redux';
import { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  logout,
  selectUser,
  selectAuthLoading,
  selectAuthError
} from '../store/slices/authSlice';
import { authService } from '../services/api/auth';

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const login = async (email, password) => {
    try {
      dispatch(loginStart());
      const userData = await authService.login(email, password);
      dispatch(loginSuccess(userData));
      return true;
    } catch (error) {
      dispatch(loginFailure(error.message));
      return false;
    }
  };

  const logoutUser = async () => {
    try {
      await authService.logout();
      dispatch(logout());
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    user,
    loading,
    error,
    login,
    logout: logoutUser
  };
};

// Tạo hook riêng cho việc kiểm tra role
export const useHasRole = (roles) => {
  const user = useSelector(selectUser);
  
  if (!user?.roles) return false;
  return Array.isArray(roles) 
    ? roles.some(role => user.roles.includes(role))
    : user.roles.includes(roles);
}; 