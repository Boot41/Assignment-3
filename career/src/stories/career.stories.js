import React from 'react';
import CareersPage from '../views/CareersPage'; // Assuming CareersPage is in a views folder

export default {
  title: 'Careers',
  component: CareersPage,
};

export const Default = (args) => <CareersPage {...args} />;
