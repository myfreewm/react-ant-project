
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import BasicExample from './../views/Home';
import Detail from './../views/Detail';
import AuthExample from './../views/Auth';
const routes = (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={BasicExample} exact />
                        <Route path='/detail' component={Detail} exact />
                        <Route path='/auth' component={AuthExample} exact />
                    </Switch>
                </BrowserRouter>
            </div>
        
        )

export default routes;
