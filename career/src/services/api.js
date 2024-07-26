// Mock login function that validates user credentials against mock data
export const mockLogin = async (email, password) => {
  try {
    // Fetch mock users data
    const response = await fetch('/mock/login-response.json'); // Updated path
    if (!response.ok) {
      throw new Error('Failed to fetch mock users data');
    }
    const mockUsers = await response.json();

    // Find the user with the matching email and password
    const user = mockUsers.find(user => user.email === email && user.password === password);

    if (user) {
      return {
        success: true,
        message: 'Login successful',
        data: {
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            token: user.token
          }
        }
      };
    } else {
      return {
        success: false,
        message: 'Invalid email or password'
      };
    }
  } catch (error) {
    console.error('Error during login:', error);
    return {
      success: false,
      message: 'An error occurred during login'
    };
  }
};

// Function to fetch career data from a mock data file
export const getCareerData = async () => {
  try {
    // Replace '/mockData.json' with the correct path to your mock data file
    const response = await fetch('/mock/mockData.json'); // Ensure path is correct
    if (!response.ok) {
      throw new Error('Failed to fetch career data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching career data:', error);
    return [];
  }
};

// Function to save career details to local storage
export const saveCareerDetails = (careerDetails) => {
  // Save career details to local storage
  localStorage.setItem('careerDetails', JSON.stringify(careerDetails));
};

// Optionally, you might want to add a function to retrieve career details
export const getSavedCareerDetails = () => {
  const savedDetails = localStorage.getItem('careerDetails');
  return savedDetails ? JSON.parse(savedDetails) : null;
};
