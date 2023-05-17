import {useContext} from 'react'
import ResultContext from '../context/result'

const Result = () => {
    const {result}:any=useContext(ResultContext)
    return (
        <div className="card">
            <p> RESULT </p>
            <h2> {result.result} </h2>
        </div>
    )
}

export default Result