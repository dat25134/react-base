// Mock auth service for development/testing
export const authService = {
  
    login: async (email, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful login
    if (email === 'test@example.com' && password === 'password') {
      return {
        id: '123',
        email: email,
        name: 'Test User',
        token: 'mock-jwt-token'
      };
    }
    
    // Mock failed login
    throw new Error('Invalid credentials');
  },
//   login: async (email, password) => {
//     try {
//       const response = await axiosInstance.post('/auth/login', {
//         email,
//         password,
//       });
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

  logout: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return true;
  }
//   logout: async () => {
//     try {
//       await axiosInstance.post('/auth/logout');
//     } catch (error) {
//       console.error('Logout error:', error);
//     }
//   }
}; 