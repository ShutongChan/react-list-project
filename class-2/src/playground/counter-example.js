import Test from './test';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('did mount');
        let count = parseInt(localStorage.getItem('count'), 10);
        if(count != null && !isNaN(count)) {            
            this.setState(() => ({count:count}));
        }
    }

    componentDidUpdate(prevProps,prevState) {
        try {
            if(prevProps.count !== this.state.count) {                       
                localStorage.setItem('count',this.state.count);
            }
        } catch(e) {

        }
       
        console.log('did update');
    }

    handleAddOne() {
        this.setState((prevState,props) => ({
            count: prevState.count + 1
        }));
        
    }

    handleMinusOne() {
        this.setState((prevState,props) => ({
            count: prevState.count - 1
        }));
    }

    handleReset() {
        this.setState((prevState,props) => ({
            count: 0
        }));
        console.log('handleReset');
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

class TestChild extends Test {
    constructor(name, age, subtitle) {
        super(name, age);
        this.subtitle = subtitle;
    }

    greeting() {
        super.greeting();
    }
}

let testObj = new TestChild('planti', 'age', 'subtitle');
console.log(testObj.greeting())


ReactDOM.render(<Counter />,document.getElementById("root"));

// let count = 0;
// const someid = "countBtn";
// const addOne = () => {
//     count++;
//     renderCounterApp()
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count:{count}</h1>
//             <button 
//                 id={someid} 
//                 onClick={addOne} className="button">+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )
//     var appRoot = document.getElementById('root')

//     ReactDOM.render(templateTwo,appRoot);
// };

// renderCounterApp();