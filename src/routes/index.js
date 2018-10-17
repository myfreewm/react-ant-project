
import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import BasicExample from './../views/Home';
import Detail from './../views/Detail';
import AuthExample from './../views/Auth';
import CustomLink from './../views/CustomLink';
import PreventForm from './../views/PreventForm';
import NotMatch from './../views/NotMatch';
import Recursive from './../views/Recursive';
import Siders from './../views/Siders';
import TodoApp from './../views/TodoApp';
const Routers = (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/placeholder' component={BasicExample} exact />
                        <Route path='/detail' component={Detail} exact />
                        <Route path='/auth' component={AuthExample} exact />
                        <Route path='/customLink' component={CustomLink} exact />
                        <Route path='/preventForm' component={PreventForm} exact />
                        <Route path='/notMatch' component={NotMatch} exact />
                        <Route path='/recursive' component={Recursive} exact />
                        <Route path='/siders' component={Siders} exact />
                        <Route path='/todo' component={TodoApp} exact />
                        <Redirect to='/todo' /> 
                    </Switch>
                </BrowserRouter>
            </div>
        
        )

export default Routers;
