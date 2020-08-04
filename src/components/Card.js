import React from 'react'

const Todo = ({details}) => {
    return (
        <div className="user-card">
            <h3>{details.name}</h3>
            <h4>{details.login}</h4>
            <h4>{details.bio}</h4>
            <h4>{details.location}</h4>
            <h4>{details.following}</h4>
            <h4>{details.followers}</h4>
        </div>
    )
}

export default Todo