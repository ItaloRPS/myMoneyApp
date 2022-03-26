import React from 'react';
import{Route,Router,Redirect,hashHistory} from 'react-router';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingSicle/billingCycle'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}>dashboard</Route>
        <Route path='/billingCycles' component={BillingCycle}></Route>
        <Redirect from='*' to='/'></Redirect>
    </Router>
)