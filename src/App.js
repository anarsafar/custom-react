import Background from './assets/tree-736885__480.jpg';
import "./app.css";
import "./style.scss";

const App = () => {
    return (
        <h1>
            <div><img src={Background} alt="" /></div>
            Welcome to React App thats build using Webpack and Babel separately
        </h1>
    )
}

export default App