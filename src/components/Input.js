import React from 'react';
import '../styles/Input.css';
import PropTypes from 'prop-types';


function Input (props) {

    console.log(props.prop4);
    return ( 
        
       
        <input className='input-1' placeholder={props.prop4}/>


    )

Input.propTypes = {
    prop4: PropTypes.string.isRequired,
    prop6: PropTypes.number.isRequired
}

};

export default Input;