import React, { useState } from 'react';
import MemberCard from './components/MemberCard';

function App() {
  const [team, setNewMember] = useState([
    {
      id: 1,
      name: "Bubba Mooseford",
      age: "25",
      role: "HR Morale Booster"
    },
    {
      id: 2,
      name: "Wendy Ibber",
      age: "29",
      role: "Fun Inspector"
    }
  ])
  return (
    <div className="App">
      <MemberCard team={team} />
    </div>
  );
}

export default App;
