import React from 'react';
import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/Card';


const exerciseNew = ({ form, onChange, onSubmit}) => (

    <div className="exercise-new-lateral-spaces row">
        <div className="col-sm exercise-new-card-space">
            <Card
                {...form}
            />
        </div>
        <div className="col-sm exercise-new-form-space">
            <ExerciseForm
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </div>
    </div>
)

export default exerciseNew