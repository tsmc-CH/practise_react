import { GolfCourse } from "@material-ui/icons";
import React from "react";
import "./NewGoal.css"

const NewGoal = props => {
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
         id: Math.random().toString(),
         Text: 'My new goal!'
        };
        
        props.onAddGoal(newGoal);
    };


    return <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" />
        <button type="submit">Add Goal</button>
    </form>
};

export default NewGoal;