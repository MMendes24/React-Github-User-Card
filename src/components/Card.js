import React from 'react'

const Todo = ({details}) => {
    return (
        <div className="user-card">
            <h3>
                {details.name}</h3>
            <h4>Username:&nbsp; 
                {details.login}</h4>
            <h4>Bio:&nbsp;  
                {details.bio}</h4>
            <h4>Location:&nbsp; 
                {details.location}</h4>
            <h4>Following:&nbsp; 
                {details.following}</h4>
            <h4>Followers:&nbsp;  
                {details.followers}</h4>
        </div>
    )
}

export default Todo