import ResultContext from "./result";
import {useState} from 'react';

const ResultState = (props: any) => {
    const state= {
        result: 0,
        card: 0,
        total: 0,
    };
    
    const [result, setResult] = useState(state);

    return (
        <ResultContext.Provider value={{result,setResult}}>
            {props.children}
        </ResultContext.Provider>
    )
};

export default ResultState;