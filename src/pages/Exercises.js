import React from 'react';

// components
import Welcome from '../components/Welcome';
import ExerciseList from '../components/ExerciseList';
import AddButton from '../components/AddButton';

class Exercises extends React.Component {

    render() {

        const { data } = this.props;

        return (
            <React.Fragment>
                <Welcome username='Juan' />
                <ExerciseList exercises={data} />
                <AddButton />
            </React.Fragment>
        );
    }
}

export default Exercises;
