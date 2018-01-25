class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            showDetails: false
        }
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                showDetails: !prevState.showDetails
            };
        });
    }

    render() {
        return (
          <div>
              <h1>Visibility Toggle</h1>
              <button onClick={this.toggleVisibility}>{this.state.showDetails ? 'Hide Details' : 'Show Details'}</button>
              {this.state.showDetails && (
                <div>
                    <p>"Hey. These are some details you can now see"</p>
                </div>
              )}
          </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// console.log("build-it-visible")
// const app = {
//     title: 'Visibility Toggle',
//     label: 'Show Details'
// };
//
// let showDetails = false;
//
// const onToggle = () => {
//     showDetails = !showDetails;
//     render()
// };
//
//
// const appRoot = document.getElementById('app');
//
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggle}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
//             {showDetails && (
//                 <div>
//                     <p>"Hey. These are some details you can now see"</p>
//                 </div>
//             )}
//         </div>
//     );
//
//     ReactDOM.render(template, appRoot)
// };
//
// render();