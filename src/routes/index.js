
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './../views/Home';
import Detail from './../views/Detail';

const routes = (
            
            <div>
                
                <BrowserRouter>
                    <Switch>

                        <Route path='/' component={Home} exact />
                        <Route path='/Detail' component={Detail} exact />
                    </Switch>
                </BrowserRouter>
            </div>
        
        )

export default routes;
