import React from 'react'

const Project = (props) => (
    <div className="card">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a target="_blank" href={props.deployed}>
        <button className="btn btn-primary">Visit the App</button>
        </a>
        <a target="_blank" href={props.github}>
        <button className="btn btn-secondary">Github Repo</button>
        </a>
    </div>
)


export default Project