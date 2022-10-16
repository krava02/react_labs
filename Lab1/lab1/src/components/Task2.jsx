const rows = [{
    dataField: 'FirstName', text: 'John'
}, {
    dataField: 'LastName', text: 'Silver'
}, {
    dataField: 'Occupation', text: 'Private Captain'
}];

const Task2 = () => {

    return (<>
            <h1>Task2</h1>
            <table>
                {rows.map((row) => (<tr>
                        <th>{row.dataField}</th>
                        <td>{row.text}</td>
                    </tr>))}
            </table>
        </>)
}

export default Task2;
