class VisiblityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisiblity = this.toggleVisiblity.bind(this);
        this.state = {
            visiblity:false
        }
    }

    toggleVisiblity() {
        this.setState((prevState) => {
            return {
                visiblity:!prevState.visiblity
            }
        })
    }

    render() {
        return(
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.toggleVisiblity}>
                    {
                        this.state.visiblity ? 'Hide details' : 'Show details'
                    }
                </button>
                {
                    this.state.visiblity && (
                        <div>
                            <p>here some contens</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById("root"));

// let visiblity = false;

// const toggleVisiblity = () => {
//     visiblity = !visiblity;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visiblity Toggle</h1>
//             <button onClick={toggleVisiblity}>
//                 {
//                     visiblity ? 'Hide details' : 'Show details'
//                 }
//             </button>
//             {
//                 visiblity && (
//                     <div>
//                         <p>here some contens</p>
//                     </div>
//                 )
//             }
//         </div>
//     );
       
    
//     ReactDOM.render(jsx,document.getElementById("root"));
// };

// render();