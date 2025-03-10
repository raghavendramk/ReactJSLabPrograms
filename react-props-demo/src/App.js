import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  const title = "Welcome to Veerappa Nisty Engineering";
  const tagline = "Designed and developed by Raghavendra Kulkarni";
  const copyright = "© 2025 Dept of CSE, All Rights Reserved";

  return (
    <div className="App">
      <Header title={title} />
      <Footer tagline={tagline} copyright={copyright} />
    </div>
  );
}

export default App;