import React, {Component} from 'react'
import { Form , Button } from 'semantic-ui-react'
import Validator from 'validator'
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';

class LoginForm extends  Component {
    state = {
        data:{
            email: '',
            password:''
        },
        loading: false,
        errors:{}
    };

    onChange = e => this.setState({
        data: {...this.state.data,
        [e.target.name]: e.target.value}
    });


    onSubmit = () =>{
        const errors = this.validate(this.state.data);
        this.setState({errors});


        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }
    }


    validate = (data) => {
        const errors = {};

        if(!Validator.isEmail(data.email))  errors.email = " Invalid email"
        
        if(!data.password) errors.password= "can't be blank";
        
        return errors;
    }





    render(){
        const data = this.state.data
        const errors = this.state.errors;

        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email}/>}
                </Form.Field>
                <Form.Field>
                    <label htmlFor="email">
                        Password
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="password"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>

                <Button primary>Login</Button>
            </Form>
        )
    }
}

LoginForm.prototypes = {
 submit: PropTypes.func.isRequired
};

export default LoginForm;