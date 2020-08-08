import React from 'react';

const MemberCard = props => {
    console.log("MC.js props: ", props)
    return (
        <div>
            {props.team.map(member => (
                <div className="memberCard" key ={member.id}>
                    <h2>{member.name}</h2>
                    <span>{member.age}</span>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default MemberCard;