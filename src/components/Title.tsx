

const Title = ({score,cardName}:any) => { 
    return (
        <div>
            <p> {cardName} </p>
            <h2>  {score}  </h2>
        </div>
    )
}

export default Title