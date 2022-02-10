import React from 'react'
import { Link } from "react-router-dom";


const Project = ({ item }) => {
  return (
    <div>
        <p key={item.id}>{item.title}</p>
        <img src={item.coverImg} alt="" />
        <Link to={`/project/${item.id}`}>
        </Link>
    </div>
  )
}

export default Project