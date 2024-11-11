// Mock auth service for development/testing
export const authService = {
  
    login: async (email, password) => {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock users with different roles
    const users = {
      'admin@example.com': {
        id: '1',
        email: 'admin@example.com',
        name: 'Admin User',
        roles: ['ADMIN', 'USER'],
      },
      'user@example.com': {
        id: '2',
        email: 'user@example.com',
        name: 'Normal User',
        roles: ['USER'],
      },
    };
    
    const user = users[email];
    if (user && password === 'password') {
      return user;
    }
    
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