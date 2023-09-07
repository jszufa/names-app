import './ResultsList.css';

import baby from './img/baby-results.jpg';

function ResultsList(props) {

    //zbudować sobie strukturę html, tak żeby to ładnie wyglądało
    //PRACOWAĆ TUTAJ

    let resultsList = props.resultsArray.map(
        (data) => {
            return (
                <tr key={data.name + data.score}>
                    <td>{data.name}</td>
                    <td>{data.score}</td>
                </tr>
            )
        }
    )

    let resultsListPersonA = props.resultsA.map(
        (data) => {
            return (
                <tr key={data.name + data.score}>
                    <td>{data.name}</td>
                    <td>{data.score}</td>
                </tr>
            )
        }
    )

    let resultsListPersonB = props.resultsB.map(
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
            {(resultsList.length > 0) &&
                <div className='ShowResultsHolder'>
                <div className='ResultsMsg'>
                    <img src={baby} className='ResultsPhoto'></img>
                    <p>And the winner is...</p>
                    <button className='WinnerName'>{props.resultsArray[0].name}!</button>
                    <p> You may also consider choosing...</p>
                    <ul className='TopNames'>
                        <li>{props.resultsArray[1].name}</li>
                        <li>{props.resultsArray[2].name}</li>
                    </ul>
                    <p>Some theory for geeks:</p>
                    <p>"{props.resultsArray[0].name}" scored <b>{props.resultsArray[0].score} </b> wchich means: "person who likes this name <b>less</b> ranked it at postion {props.resultsArray[0].score}". The second person may like the name "{props.resultsArray[0].name}" even more or at the same level.</p>
                    <p>So, in other words, one of you is probably less happy with the choice, but still, this may be the best deal for you as a pair. If you would choose a name that scored for example 30, it would probably make the "less-liking" person really dissatisfied, even if for the second person this name would be a first choice. </p>
                    <p>See the rankings overview below for more details.</p>
                </div>
            
            {/* <p>And the winner is... </p> */}
            {/* <h2>{winnerName}</h2>
            <p> 
            {winnerName} scored {winnerScore} points, so it means that the name was in {winnerScore}. place for the person who likes the name less. In this type of decision there is usually one side that is less satisfied. This ranking maximizes the satisfaction of this person. </p> */}

            <p><b>Complete ranking</b></p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsList}
                </tbody>
            </table>
            <p><b>Person A ranking</b></p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsListPersonA}
                </tbody>
            </table>
            <p><b>Person B ranking</b></p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsListPersonB}
                </tbody>
            </table>
            </div>}
        </div>
    )
}


export default ResultsList;