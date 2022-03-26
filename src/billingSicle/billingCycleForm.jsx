import React,{Component}  from 'react';
import {reduxForm,Field}  from 'redux-form';

class billingCycleForm extends Component{
    render(){
        const {handleSubmit} = this.props
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component="input" required></Field>
                    <Field name="month" component="input" required></Field>
                    <Field name="year" component="input" ></Field>
                </div>
                <div className="box-footer">
                <button type="submit" className="btn btn primary">Submit</button>
                </div>
            </form>
        )
    }


}


export default reduxForm({form:'billingCycleForm'})(billingCycleForm)