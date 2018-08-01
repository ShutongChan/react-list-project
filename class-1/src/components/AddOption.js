import React from 'react';

class AddOptions extends React.Component {
    state = {
        error: undefined
    }
    onSubmit= (e) => {
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        //if(!!option) {
            let error = this.props.addOption(option);
            this.setState(() => ({error}));
            if(!error) {
                e.target.elements.option.value = '';
            }
            
        //}
    }
    render() {
        return (
            <div>
            {!!this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.onSubmit}>
                    <input className="add-option__input" name="option" type="text" />
                    <input className="button" type="submit" value="Add Options" />
                </form>
            </div>
        )
    }
}

export default AddOptions