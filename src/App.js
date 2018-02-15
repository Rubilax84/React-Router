import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from "react-router-dom";
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

class App extends Component {

    constructor(props) {
        super(props);
        this.routsData = this.props.data.sort(this.sortByOrder);
    }

    componentDidMount() {
        console.log(this.routsData);
    }

    sortByOrder(a, b) {
        return parseInt(a.order) - parseInt(b.order);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                    {this.routsData.map((data, i) => <Link key={data.order} className="App-link"
                                                           to={'/' + data.id}>{data.title}</Link>)}
                </header>
                <Switch className="App-intro">
                    <Route exact path='/' component={Loadable({
                        loader: () => import('./' + this.routsData[0].path),
                        loading: Loading
                    })}/>
                    {this.routsData.map((data, i) =>
                        <Route path={'/' + data.id} component={Loadable({
                            loader: () => import('./' + data.path),
                            loading: Loading
                        })}/>
                    )}
                </Switch>
            </div>
        );
    }
}

export default App;
