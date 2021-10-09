export default function Information() {
    return (
        <div className="has-background-white-ter pl-6 pr-6 mr-6 ml-6 pt-4 pb-4 ">
            <div className="content">
                <span className="has-text-weight-bold has-text-info">Problem</span>
                <p className="has-text-grey-darker">You have 21 bottles of wine. 7 full, 7 half full and 7 empty. And you must distribute to 3 people so that each one has the same amount of wine and the same number of bottles.</p>
                <span className="has-text-weight-bold has-text-info">Solution</span>
                <p className="has-text-grey-darker">The problem request an initial population, the number of iterations, the mutation probability and the cost or fitness that you expect:</p>
                <ul>
                    <li>
                        <span className="has-text-link has-text-weight-semibold">Population: </span>The algorithm generates a random number of individuals that represent a solution.
                    </li>
                    <li>
                        <span className="has-text-link has-text-weight-semibold">Iterations: </span>The populations will reproduce with its best individuals and will sometimes mutate. This process is carried out during n iterations.
                    </li>
                    <li>
                        <span className="has-text-link has-text-weight-semibold">Mutation: </span>A random number is compared with the mutation probability and only in this case, it generates new individuals.
                    </li>
                    <li>
                        <span className="has-text-link has-text-weight-semibold">Cost/Fitness: </span>The perfect solution will cost 20. But you can enter a different cost to stop the process.
                    </li>
                </ul>
                <p className="has-text-grey-darker">The response presents the information of the algorithm execution:</p>
                <ul>
                    <li>
                        <span className="has-text-link has-text-weight-semibold">Iteration: </span>The number of the iteration where the algorithm finished.
                    </li>
                    <li>
                        <span className="has-text-link has-text-weight-semibold">Individual: </span>The position of the best individual in the population.
                    </li>
                    <li>
                        <span className="has-text-link has-text-weight-semibold">Cost/Fitness: </span>The cost or fitness of the best individual (20 is the best cost possible).
                    </li>
                    <li>
                        <span className="has-text-link has-text-weight-semibold">Best Solution: </span>The matrix of the best solution.
                    </li>
                </ul>
            </div>
            <div className="is-divider"></div>
        </div>
    )
}