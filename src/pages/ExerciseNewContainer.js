import React from 'react';
import '../components/styles/ExerciseNew.css';
import ServerError from './ServerError';
import ExerciseNew from './ExerciseNew';

// custom hook
import url from '../config';


class ExerciseNewContainer extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        loading: false,
        error: null,
    };

    // send handleChange to child component using props
    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({
            loading: true
        })

        try {
            console.log(this.state.form);
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let response = await fetch(`${url}/exercises`, config);
            // let json = await response.json();

            this.setState({
                loading: false
            });

            //redirect to main page
            this.props.history.push('/exercises')

        } catch (error) {
            this.setState({
                loading: false
            })
            this.setState({
                error
            })
        }
    }


    render() {

        if(this.state.error)
            return <ServerError/>

        return <ExerciseNew 
                    form={this.state.form}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
         />
    }
}

export default ExerciseNewContainer;