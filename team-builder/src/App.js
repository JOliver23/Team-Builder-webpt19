import React, { useState } from 'react';
import MemberCard from './components/MemberCard';
import NewMemberForm from './components/NewMemberForm';

function App() {
  const [team, setNewMember] = useState([
    {
      id: 1,
      name: "Bubba Mooseford",
      email: "B.MooseFord@msn.com",
      role: "HR Morale Booster"
    },
    {
      id: 2,
      name: "Wendy Ibber",
      email: "wendy.ibbs@msn.com",
      role: "Fun Inspector"
    }
  ]);

  const addNewMember = (member) => {
    setNewMember([...team, {...member, id: Date.now() }])
  };

  return (
    <div className="App">
      <NewMemberForm setNewMember={addNewMember}  member={team} />
      <MemberCard team={team} />
    </div>
  );
}

export default App;
