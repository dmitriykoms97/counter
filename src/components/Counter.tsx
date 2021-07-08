import React, {useState} from 'react';
import s from './counter.module.css';
import Display from "./Display";
import IncrementButton from "./IncrementButton";
import ResetButton from "./ResetButton";

const Counter = () => {

    let [counts, setCount] = useState(0)

    function addCount() {
        counts++;
        setCount(counts)
    }

    function resetFunc() {
        setCount(0)
    }

    return (
        <div className={s.containerCounter}>
            <Display totalNumber={counts}/>
            <div className={s.buttonsGroup}>
                <IncrementButton totalNumber={counts} addCount={addCount}/>
                <ResetButton resetCallback={resetFunc}/>
            </div>

        </div>
    );
};

export default Counter;