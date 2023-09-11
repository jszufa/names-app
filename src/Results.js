import { useEffect, useState, useRef } from 'react';
import './Results.css';
import { compareRankings } from './helpers/compareRankingsHelper';
import ResultsList from './ResultsList';
import trophy from './img/trophy.png';

function Results(props) {

    const [resultsArray, setResultsArray] = useState([]);
    const [resultsA, setResultsA] = useState([]);
    const [resultsB, setResultsB] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const scrollingTop = useRef(null);

    //RESULTS SCROLL INTO VIEW
    useEffect(() => {
        if (resultsArray.length) {
            const top = scrollingTop.current;
            top.scrollIntoView({ behavior: "smooth" });
        }
    }, [resultsArray]);

    const showResults = () => {

        if (props.ranking.length === 2) {
            let results = compareRankings(props.ranking[0], props.ranking[1]);

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

    return (
        <section className='ResultsSection' >

            <div className='ButtonBox'>
                <button onClick={() => showResults()}>Done  &#x2713;</button>
                <p className='ErrorMsg' >{errorMsg}</p>
            </div>

            <container ref={scrollingTop} className='ContentBox'>
                <img src={trophy} className='TrophyIcon BigIcon' />
                <h2>3. See your top names</h2>
                <p>See the best names suggestion for your relationship.</p>
                {resultsArray.length == 0 && <p className='ErrorMsg' >To see results you must complete ALL comparisons.</p>}
                <div className='Results'>
                    <ResultsList resultsArray={resultsArray} resultsA={resultsA} resultsB={resultsB} />
                </div>
            </container>

        </section>
    )
}

export default Results;