import './ResultsList.css';

function ResultsList(props) {

    //zbudować sobie strukturę html, tak żeby to ładnie wyglądało
    //PRACOWAĆ TUTAJ

    let ResultsList = props.resultsArray.map(
        (data) => {
            return (
                <li>
                    <p>{data.name}</p>
                    <p>{data.score}</p>
                </li>
            )
        }
    )

    return(
        <div className='ResultsList'>
            {ResultsList}
        </div>
    )
}

export default ResultsList;