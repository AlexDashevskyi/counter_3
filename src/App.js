import React, {useState} from 'react';
import Counter from './Counter';
import './App.css';


export default function App() {

    const [counters, setCounters] = useState([0]) //Set initial state of counters / number of counters
    const addCounter = () => { // function, add a new counter
        const r = Math.round(Math.random() * 10) // variable with assigned generates random number from 0 to 10 (not included 10)
        setCounters([...counters, r]) // we use a function that change initial value of counters, in this case, ‘expands’ an iterable object 'counter' into the list of arguments (new counters) with random number
    };
    const resetAll = () => { // function reset all counters to 0 number
        setCounters([...counters].map(el => 0)) //we use a function that change initial value of counters, in this case we use method map that assigns new value 0 for all counters (expanded objects of counters - array)
    };
    const deleteAll = () => { //function delete all counters
        setCounters([]) // we use function, that change initial state of counters and gives result of empty array (in this case delete all counters)
    };
    const plusValue = (index, value) => { // function use to change initial state of counters // here we use callback function and receive index and value from Counter component
        let plusValue = [...counters]; // new variable, 'expands' an iterable object 'counter' into list of new counters
        plusValue[index] += value; // plus value to each expanded object 'counter' with assigned index and given value that receive from Counter component (callback function)
        setCounters(plusValue); // update state with new value
    }
    const reset = (index) => { //function use to change initial state of counters // here we use callback function and receive index and value from Counter comp
        let resetCounter = [...counters] //new variable, 'expands' an iterable object 'counter' into list of new counters
        resetCounter[index] = resetCounter[index] - resetCounter[index]; // new value of counters element with assigned index - the same value with the same index, so we can reset counter
        setCounters(resetCounter); // update state with new value
    };
    const deleteCounter = (index) => { //function use to change initial state of counters // here we use callback function and receive index and value from Counter comp
        let deleteCounter = [...counters]; // new variable, 'expands' an iterable object 'counter' into list of new counters
        deleteCounter.splice(index, 1); // use method splice to deleted one object with assigned index
        setCounters(deleteCounter) // update state with new value;
    };
    return (
        <div className={'App'}>
            <button className={'btn btn-warning ml-1 mr-1'} onClick={resetAll}>O</button>
            <button className={'btn btn-danger'} onClick={deleteAll}>X</button>
            <br/>

            <br/>
            {counters.map((el, i) =>   // creates a new array populated with the results of calling a provided function on every element of counters
                <Counter // adding component to main parent component and following below send props (function result)
                    count={el}
                    key={i}
                    index={i}
                    plusValue={plusValue}
                    resetCounter={reset}
                    deleteCounter={deleteCounter}

                />)}
            <br/>
            <button className={'btn btn-outline-success'} onClick={addCounter}>Add counter</button>

        </div>
    )
}
