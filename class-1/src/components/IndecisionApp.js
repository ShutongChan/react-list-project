import React from 'react';
import AddOptions from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionMpdal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selected: undefined
    }

    componentDidMount() {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        this.setState(() => {
            return {
                options: options || []
            }
        });
        console.log('did mount');
    }

    componentDidUpdate(prevProps, prevState) {
        try {
            if(prevProps.options.length !== this.state.options.length) {
                const json = JSON.stringify(this.state.options);
                localStorage.setItem('options',json);
            }
        } catch (e) {

        }
       
        
    }

    componentWillUnmount() {
        console.log('will unmount');
    }

    handleDeleteOptions = () => {
        this.setState({
            options:[]
        })
    }

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((item) => item !== option)
        }));
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter vaild value to add item'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exsit'
        }
        
        this.setState((prevState) => ({options:prevState.options.concat([option])}));
        

    }

    handlePick = () => {
        let options = this.state.options;
        let randomIndex = Math.floor(Math.random() * options.length);
        //alert(options[randomIndex]);
        this.setState(() => ({selected: options[randomIndex]}))
    }

    handleHideModal = () => {
        this.setState(() => ({selected: undefined}));
    }

    render() {
        const title = 'Indecision';
        const subTitle = 'Do something interesting:)';
        return(
            <div>
                <Header subTitle={subTitle} />
                <div className="container">
                    <Action 
                        hasOptions={!!this.state.options && this.state.options.length > 0}  
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions} 
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOptions 
                            addOption={this.handleAddOption} 
                        />
                        <OptionMpdal
                            selectedOption={this.state.selected}
                            handleHideModal={this.handleHideModal}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options:[]
}

export default IndecisionApp;