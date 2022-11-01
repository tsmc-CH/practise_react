import { GolfCourse } from "@material-ui/icons";
import React, {useState} from "react";
import "./NewGoal.css";

const NewGoal = props => {

    const [entereText, setEntereText] = useState('');

    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
         id: Math.random().toString(),
         text: entereText
        };

       setEntereText('');
        
        props.onAddGoal(newGoal);
    };

    const textChangeHandler = event => {
       setEntereText(event.target.value);
    };

    return <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" value={entereText} onChange={textChangeHandler} />
        <button type="submit">Add Goal</button>
    </form>
};

export default NewGoal;