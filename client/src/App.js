
import React from 'react';
import { axiosInstance } from './config';
function App() {
  console.log(process.env.REACT_APP_GOOGLE_API);
  return (
    <div className="App">
      <button>Get Title</button>
    </div>
  );
}

export default App;
