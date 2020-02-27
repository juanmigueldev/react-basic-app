import React from 'react';
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <React.Fragment>
        {
            exercises.map((exercise, index) => {
                return (
                    <Card
                        key={index}
                        {...exercise}
                    />
                );
            })
        }
    </React.Fragment>
)


export default ExerciseList