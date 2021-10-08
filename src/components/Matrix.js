import matrixStyle from '../../assets/styles/matrix.module.css'

export default function Matrix(props) {
    const { data } = props

    return (
        <div className="table-container pt-4">
            <table className="table">
                <thead>
                    <tr>
                        <th className="has-background-white-ter"></th>
                        <th><progress className="progress is-danger mr-4" value="100" max="100"></progress></th>
                        <th><progress className="progress is-danger mr-4" value="50" max="100"></progress></th>
                        <th><progress className="progress is-danger mr-4" value="0" max="100"></progress></th>
                        <th>Bottles</th>
                        <th>Wine</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((items, index) => {
                        let bottles = 0;
                        let wine = 0;
                        return (
                            <tr key={index}>
                                <td className="is-info has-text-weight-bold">P{index + 1}</td>
                                {
                                    items.map((subItem, sIndex) => {
                                        bottles = (bottles + parseInt(subItem));
                                        switch (sIndex) {
                                            case 0:
                                                wine = wine + parseInt(subItem) * 1;
                                                break;
                                            case 1:
                                                wine = wine + parseInt(subItem) * 0.5;
                                                break;
                                            case 2:
                                                wine = wine + parseInt(subItem) * 0;
                                                break;
                                        }
                                        return <td key={sIndex}>{subItem}</td>
                                    })
                                }
                                <td className="has-background-link-light has-text-centered">{bottles}</td>
                                <td className="has-background-link-light has-text-centered">{wine}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>

            </table>
        </div>
    )
}