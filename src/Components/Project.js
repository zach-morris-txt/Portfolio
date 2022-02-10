import React from 'react'
import { Link } from "react-router-dom";


const Project = ({ item }) => {
  return (
    <div>
        <img src={item.img} alt="" />
        <Link to={`/project/${item.id}`} />
    </div>
  )
}

export default Project