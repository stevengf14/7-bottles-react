import matrixStyle from '../../assets/styles/matrix.module.css'

export default function Matrix(props) {
    const { data } = props
    let row0 = 0;
    let row1 = 0;
    let row2 = 0;
    let wine = 0;

    return (
        <div className="table-container pt-4">
            <table className="table">
                <thead>
                    <tr>
                        <th className="has-background-white-ter"></th>
                        <th><progress className="progress is-danger mr-4" value="100" max="100"></progress></th>
                        <th><progress className="progress is-danger mr-4" value="50" max="100"></progress></th>
                        <th><progress className="progress is-danger mr-4" value="0" max="100"></progress></th>
                        <th>Wine</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((items, index) => {
                        wine = 0;
                        return (
                            <tr key={index}>
                                <td className="is-info has-text-weight-bold">P{index + 1}</td>
                                {
                                    items.map((subItem, sIndex) => {
                                        switch (sIndex) {
                                            case 0:
                                                wine = wine + parseInt(subItem) * 1;
                                                row0 += parseInt(subItem);
                                                break;
                                            case 1:
                                                wine = wine + parseInt(subItem) * 0.5;
                                                row1 += parseInt(subItem);
                                                break;
                                            case 2:
                                                wine = wine + parseInt(subItem) * 0;
                                                row2 += parseInt(subItem);
                                                break;
                                        }
                                        return <td key={sIndex}>{subItem}</td>
                                    })
                                }
                                <td className="has-background-link-light has-text-centered">{wine}</td>
                            </tr>

                        )
                    })
                    }
                    < tr >
                        <td className="is-link has-text-weight-bold">W</td>
                        <td className="has-background-link-light has-text-centered">{row0}</td>
                        <td className="has-background-link-light has-text-centered">{row1}</td>
                        <td className="has-background-link-light has-text-centered">{row2}</td>
                        <td className="has-background-white-ter"></td>
                    </tr>
                </tbody>

            </table>
        </div >
    )
}