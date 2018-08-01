console.log("app.js is running")

var app = {
    title: 'This is title',
    subTitle: 'This is subtitle',
    options: ["one", "two"]
}

const onFormSubmit = (e) => {
    e.preventDefault();
    //console.log(e)

    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
}

const removeAll = () => {
    app.options = [];
    renderTemplate();
}

const onRandomSelect = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    console.log(option);
}

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            {
                (app.options && app.options.length > 0) 
                ? (<div>
                        <p>{ "Here are your options"}</p>
                        <ol>
                            {
                                app.options.map((item,index) =>  <li key={index}>{item}</li>)
                            }
                        </ol>
                    </div>)
                : (<p>"No options"</p>)
            }
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
                <button onClick={removeAll}>Remove All</button>
                <button disabled={app.options.length == 0} onClick={onRandomSelect}>What Should I Do</button>
            </form>
        </div>
    );

    var appRoot = document.getElementById('root')

    ReactDOM.render(template,appRoot);
}
renderTemplate();


