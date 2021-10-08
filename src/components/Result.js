import Matrix from "./Matrix"

export default function Result(props) {
    const { data } = props

    return (
        <div>
            <div className="column">
                <div className="column is-quarter"><strong>Iteration: </strong>{data.iteration}</div>
                <div className="column is-quarter"><strong>Individual: </strong>{data.individual}</div>
                <div className="column is-half"><strong>Cost: </strong>{data.cost}</div>
                <div className="column is-half"><strong>Best Solution: </strong>
                    <Matrix data={data.bestSolution} />
                </div>
            </div>
        </div>
    )
}