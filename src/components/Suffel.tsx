import {useContext} from 'react'
import ResultContext from '../context/result'

const Suffel = () => {
    const {result,setResult}:any=useContext(ResultContext)

    const onSuffel = () => {
        const num =Math.random().toFixed(2)
        let score=result.total;
        let hit=false;
        if(num==result.result){
            score=result.total+1;
            hit=true;
        }
        setResult({
            result:num,
            card: hit?"HIT":Math.random().toFixed(2),
            total:score
        })

    };
    return (
        <div  className="card" onClick={onSuffel}>
            <p> CLICK TO HIT  </p>
            <h2>Suffel</h2>
        </div>
    )
}

export default Suffel