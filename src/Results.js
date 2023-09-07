import { useState } from 'react';
import './Results.css';
import { compareRankings } from './helpers/compareRankingsHelper';
import ResultsList from './ResultsList';

//Mogę dodać jeszcze coś w rodzaju: "show individual rankings"


function Results(props) {

    const [resultsArray, setResultsArray] = useState([]);
    const [resultsA, setResultsA] = useState([]);
    const [resultsB, setResultsB] = useState([]);

    const [errorMsg, setErrorMsg] = useState('');

    const showResults = () => {

        if (props.ranking.length === 2) {
            let results = compareRankings(props.ranking[0], props.ranking[1]);
            console.log(results);

            setResultsArray(results);
            setErrorMsg('');

            let resultsA = props.ranking[0].map(
                (data, index) => {
                    return ({ name: data, score: index + 1 })
                });

            let resultsB = props.ranking[1].map(
                (data, index) => {
                    return ({ name: data, score: index + 1 })
                });


            setResultsA(resultsA);
            setResultsB(resultsB);
        }
        else {
            setErrorMsg('To see results you must complete ALL comparisons.')
        }
    }

    console.log(props.ranking);

    return (
        <div className='Results'>
            <button onClick={() => showResults()}>Show results</button>
            <p className='ErrorMsg' >{errorMsg}</p>
            <ResultsList resultsArray={resultsArray} resultsA={resultsA} resultsB={resultsB}/>
        </div>
    )
}

export default Results;