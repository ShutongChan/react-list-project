import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this is some centent: {props.info}</p>
    </div>
);

const withAdminWarning = () => {

};



ReactDOM.render(<Info info="this is some info" />, document.getElementById("root"));


let rexp = /^null$/;
console.log(rexp.test('jnull'));