
export function getRememberedUser() {
    const user = localStorage.getItem('rememberedUser');
    return user ? JSON.parse(user) : null;
  }
  
  // Function to save the remembered user to local storage
  export function saveRememberedUser(user) {
    localStorage.setItem('rememberedUser', JSON.stringify(user));
  }
  
  // Function to clear the remembered user from local storage
  export function clearRememberedUser() {
    localStorage.removeItem('rememberedUser');
  }
  