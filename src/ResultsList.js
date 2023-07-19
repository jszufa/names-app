import './ResultsList.css';

function ResultsList(props) {

    //zbudować sobie strukturę html, tak żeby to ładnie wyglądało
    //PRACOWAĆ TUTAJ

    let ResultsList = props.resultsArray.map(
        (data) => {
            return (
                <tr key={data.name + data.score}>
                    <td>{data.name}</td>
                    <td>{data.score}</td>
                </tr>
            )
        }
    )

    return (
        <div className='ResultsList'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {ResultsList}
                </tbody>
            </table>
        </div>
    )
}


export default ResultsList;