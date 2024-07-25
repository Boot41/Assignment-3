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

// Add the missing functions
export const getCareerData = async () => {
  // This function simulates fetching career data from an API
  const response = await fetch('/mockData.json'); // Ensure this URL is correct
  const data = await response.json();
  return data;
};

export const saveCareerDetails = (careerDetails) => {
  // This function simulates saving career details to an API or local storage
  localStorage.setItem('careerDetails', JSON.stringify(careerDetails));
};
