
import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ProfileCard
        name="Dr. Sharanbasappa Sali

PRINCIPAL,"
        bio=" It is my pleasure to welcome you to Veerappa Nisty Engineering College (VNEC), an Institution under Sharnabasava Vidya Vardhak Sangha which was established in 1903 to do Akshara Dasoha to the Educationally deprived region with a vision of “Quality Education, with strong commitment to provide professional education with thrust on creativity and innovation along with a sense of social responsibility, human values and concern for social commitment”.."
        profilePicture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Z9PNHhb6BkHBVp0pXJKW0z6Ws835XHaWaA&s "
      />
    </div>
  );
};


export default App;
