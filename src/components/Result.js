import Matrix from "./Matrix"

export default function Result(props) {
    const { data } = props

    return (
        <div className="columns">
            <div className="column">
                <div className="column"><strong>Iteration: </strong>{data.iteration}</div>
                <div className="column"><strong>Individual: </strong>{data.individual}</div>
                <div className="column"><strong>Cost: </strong>{data.cost}</div>
                <div className="column"><strong>Best Solution: </strong></div>
            </div>
            <div className="column"><Matrix data={data.bestSolution} /></div>
        </div >
    )
}