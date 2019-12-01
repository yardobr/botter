import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = (props) => {
  const makeRequest = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/users/all');
      const data = await res.json();
      console.log(data);
    } catch (err) {
      debugger;
    }
  };

  useEffect(() => {
    makeRequest();
  });

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
