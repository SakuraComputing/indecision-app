console.log("App.js is running");

// JSX - Javascript XML
const app = {
    title: 'Put your hands in the life of a computer',
    //subTitle: 'Entertainment',
    options: []
};

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Indecision Application</h1>
            <p>{app.title}</p>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{(app.options.length > 0 ? "Here are your options" : "No options")}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>{
                app.options.map((Item) => {
                    return <li key={Item}>{Item}</li>;
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();