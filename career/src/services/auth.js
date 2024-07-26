// services/auth.js

export const getRememberedUser = () => {
    try {
      const user = localStorage.getItem('user');
      // Check if the user item exists and is not null or undefined
      return user ? JSON.parse(user) : null;
    } catch (error) {
      // Handle JSON parsing errors
      console.error('Error parsing remembered user from localStorage:', error);
      return null;
    }
  };
  
  export const saveRememberedUser = (user) => {
    try {
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      // Handle potential errors in saving to localStorage
      console.error('Error saving remembered user to localStorage:', error);
    }
  };
  
  export const clearRememberedUser = () => {
    try {
      localStorage.removeItem('user');
    } catch (error) {
      // Handle potential errors in removing from localStorage
      console.error('Error clearing remembered user from localStorage:', error);
    }
  };
  