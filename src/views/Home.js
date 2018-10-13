
import React,{Component} from 'react';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';

import TestAjax from './TestAjax';

const BasicExample = () => (

            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/' >Home</Link>
                        </li>
                        <li>
                            <Link to='/about' >About</Link>
                        </li>
                        <li>
                            <Link to='/topics' >Topics</Link>
                        </li>
                    </ul>
                    <hr />
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/topics' component={Topics} />
                </div>
            </Router>
        );

const Home = () => (
            <div>
                <TestAjax />
            </div>
        );
const About = () => (
            <div>
                <h2>About</h2>
            </div>
        );

const Topics = ({match}) => (

        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}> Rendering with React </Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}> components </Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}> props-v-state </Link>
                </li>
            </ul>
            <Route path={`${match.path}/:topicid`} component={Topic} />
            <Route exact path={match.path} render = {() => <h3>Please select a topic</h3>} />
        </div>
    )

const Topic = ({match}) => (
            <div>
                <h3>{match.params.topicid}</h3>
            </div>
        )

export default BasicExample;
