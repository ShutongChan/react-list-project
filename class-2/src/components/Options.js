import React from 'react';
import Option from './Option';

const Options = (props) => 
    (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your options</h3> 
                <button onClick={props.handleDeleteOptions} className="button button--link">Remove All</button>
            </div>
            {props.options.length == 0 && <p className="widget__message">please enter something</p>}
            <ol>
                {
                    !!props.options && props.options.length > 0 
                    ? (
                        props.options.map((item, index) => (
                            <Option 
                                key={index} 
                                optionText={item} 
                                optionIndex={index + 1}
                                handleDeleteOption={props.handleDeleteOption}
                            />
                        ))
                    )
                    : 'No options'
                }
            </ol>
        </div>
    )


export default Options;