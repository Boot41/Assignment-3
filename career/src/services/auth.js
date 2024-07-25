// src/services/auth.js

export const saveRememberedUser = (userDetails) => {
    localStorage.setItem('rememberedUser', JSON.stringify(userDetails));
  };
  
  export const getRememberedUser = () => {
    const rememberedUser = localStorage.getItem('rememberedUser');
    return rememberedUser ? JSON.parse(rememberedUser) : null;
  };
  
  export const clearRememberedUser = () => {
    localStorage.removeItem('rememberedUser');
  };
  