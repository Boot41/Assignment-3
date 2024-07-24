// src/services/api.js
export const mockLogin = async (email, password) => {
    // Mock API call
    if (email === 'test@example.com' && password === 'password') {
      return {
        success: true,
        data: {
          token: 'mock-token-123456'
        }
      };
    } else {
      return {
        success: false,
        message: 'Invalid email or password'
      };
    }
  };
  