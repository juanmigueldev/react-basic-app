import React from 'react';
import { Link } from 'react-router-dom';
import './styles/AddButton.css';
import AddButtonImg from '../images/add.png';


const AddButton = () => (
    <Link to="exercise/new">
        <img src={AddButtonImg} alt="add" className="fitness-add" />
    </Link>
)


export default AddButton;