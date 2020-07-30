import React from 'react';

export default function Counter(props) {

    return (
        <div>
            <button className={'btn btn-primary mr-2 mr-2'} onClick={() => props.plusValue(props.index, -3)}>-3</button>
            <button className={'btn btn-primary mr-2 mr-2'} onClick={() => props.plusValue(props.index, -2)}>-2</button>
            <button className={'btn btn-primary mr-2 mr-2'} onClick={() => props.plusValue(props.index, -1)}>-1</button>
            <span className={'h2'}>{props.count}</span>
            <button className={'btn btn-primary ml-1 mr-1'} onClick={() => props.plusValue(props.index, +1)}>+1</button>
            <button className={'btn btn-primary ml-1 mr-1'} onClick={() => props.plusValue(props.index, +2)}>+2</button>
            <button className={'btn btn-primary ml-1 mr-1'} onClick={() => props.plusValue(props.index, +3)}>+3</button>
            <button className={'btn btn-warning ml-1 mr-1'} onClick={() => props.resetCounter(props.index)}>O</button>
            <button className={'btn btn-danger ml-1 mr-1'} onClick={() => props.deleteCounter(props.index)}>X</button>
        </div>
    );
}