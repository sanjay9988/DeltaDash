import Title from "./Title"

const  Card =({score,cardName}:any)=> {
    return (
        <div className="card">
            <Title score={score} cardName={cardName}/>
        </div>
    )
}

export default Card