import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../src/index'; // Import your main component here
import { get } from '../src/services/apiService';

const rootElement = document.getElementById('root');

// Define the render function
const renderApp = () => {
  ReactDOM.render(<Index />, rootElement); // Use your main component directly
};

// Define a function to check the backend status
const checkBackendStatus = async () => {
  console.log('checkBackendStatus');
  try {
    const response = await get('/health');
    const res = typeof response === 'string' ? response as string : '';
    console.log()
    if (!res.includes('Error')) {
      renderApp();
    } else {
      console.log('Backend not ready yet');
      // If the response is not OK, try again after a delay
      setTimeout(checkBackendStatus, 500);
    }
  } catch (error) {
    console.log('Backend not ready yet', error);
    // If the request fails (for example, because the backend is not running),
    // try again after a delay
    setTimeout(checkBackendStatus, 500);
  }
};

// Start checking the backend status as soon as the frontend starts
checkBackendStatus();

// Hot module replacement
// if ((module as any).hot) {
//   (module as any).hot.accept('../src/index', () => {
//     console.log('Hot reload')
//     // Update the import path
//     renderApp();
//   });
// }
