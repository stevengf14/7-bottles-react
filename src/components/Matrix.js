import matrixStyle from '../../assets/styles/matrix.module.css'

export default function Matrix(props) {
    const { data } = props
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th><abbr title="person1">Wine</abbr></th>
                        <th><span className={matrixStyle.user1}></span></th>
                        <th><abbr title="person2">P2</abbr></th>
                        <th><abbr title="person3">P3</abbr></th>
                    </tr>
                </thead>
                {
                    data &&
                    /*
                    // To return a dinamic table
                    responseMatrix.bestSolution && responseMatrix.bestSolution.map((items, index) => {
                    return (
                      <tr key={index}>
                        {items.map((subItem, sIndex) => {
                          return <td key={sIndex}>{subItem}</td>
                        }
                        )}
                      </tr>
                    )*/
                    <tbody>
                        <tr>
                            <td><progress className="progress is-danger" value="100" max="100"></progress></td>
                            <td>{data[0][0]}</td>
                            <td>{data[0][1]}</td>
                            <td>{data[0][2]}</td>
                        </tr>
                        <tr>
                            <td><progress className="progress is-danger" value="50" max="100"></progress></td>
                            <td>{data[1][0]}</td>
                            <td>{data[1][1]}</td>
                            <td>{data[1][2]}</td>
                        </tr>
                        <tr>
                            <td><progress className="progress is-danger" value="0" max="100"></progress></td>
                            <td>{data[2][0]}</td>
                            <td>{data[2][1]}</td>
                            <td>{data[2][2]}</td>
                        </tr>
                    </tbody>
                }
            </table>
        </div>
    )
}