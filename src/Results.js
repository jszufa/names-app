import { useState } from 'react';
import './Results.css';
import {compareRankings} from './helpers/compareRankingsHelper';
import ResultsList from './ResultsList';

function Results(props) {

    const[resultsArray, setResultsArray] = useState([])

    const showResults = () => {
        
        let results = compareRankings(props.ranking[0], props.ranking[1]);
        console.log(results);

        setResultsArray(results);
    }

    return(
        <div className='Results'>
            <button onClick={()=>showResults()}>Show results</button>
            <ResultsList resultsArray={resultsArray}/>
        </div>
    )
}

export default Results;