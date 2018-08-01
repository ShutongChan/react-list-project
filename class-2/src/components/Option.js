import React from 'react';

const Option = (props) => 
    (
        <li className="option">
            <label className="option__text">{props.optionIndex}. {props.optionText}</label>
            <button className="button button--link" onClick={(e) => {props.handleDeleteOption(props.optionText)}}>remove</button>
        </li>
    )


export default Option;