import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component page
import NotFound from '../pages/NotFound';
import ExerciseNewContainer from '../pages/ExerciseNewContainer';
import ExercisesContainer from '../pages/ExercisesContainer';


const App = () => (
    <Router>
        <Switch>
            <Route exact path="/exercises" component={ExercisesContainer} />
            <Route exact path="/exercise/new" component={ExerciseNewContainer} />
            <Route component={NotFound} />>
            </Switch>
    </Router>
)



export default App