
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'


const NotMatch = () => (

    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/notMatch'>Home</Link>
                </li>
                <li>
                    <Link to='/old-match'>Old Match ,to be redirected</Link>
                </li>
                <li>
                    <Link to='/will-match'>Will Match</Link>
                </li>
                <li>
                    <Link to='/will-not-match'>will not match</Link>
                </li>
                <li>
                    <Link to='/also/will/not/match'>also will not match</Link>
                </li>
            </ul>
            <Switch>
                <Route path='/notMatch' exact component={Home} />
                <Redirect from='/old-match' to='will-match' />
                <Route path='/will-match' component={WillMatch} />
                <Route component={NotMatchs} />
            </Switch>
        </div>
    </Router>
)

const Home = () => (
    <p>
        A <code>&lt;Switch></code> render the first child
    </p>
)

const WillMatch = () => <h3>Matched!</h3>

const NotMatchs= ({location}) => (

    <div>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
)

export default NotMatch
