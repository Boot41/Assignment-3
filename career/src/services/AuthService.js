// src/services/AuthService.js
const login = async ({ email, password, rememberMe }) => {
    const response = await fetch('/mock/login.json');
    const data = await response.json();
  
    if (data.email === email && data.password === password) {
      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify(data));
      }
      sessionStorage.setItem('user', JSON.stringify(data));
      return { success: true, user: data };
    } else {
      return { success: false };
    }
  };
  
  const signup = async ({ email, password }) => {
    const response = await fetch('/mock/signup.json');
    const data = await response.json();
  
    if (data.success) {
      return { success: true };
    } else {
      return { success: false };
    }
  };
  
  const AuthService = {
    login,
    signup,
  };
  
  export default AuthService;
  