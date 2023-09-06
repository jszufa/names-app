import './NamesList.css';

function NamesList(props) {
    let namesArray = props.names;
    let namesArrayElements = namesArray.map((name) => {
        return <li key={name.id} onClick={() => props.removeMethod(name.id)}>{name.name}</li>
    });

    return (
        <ul id="list" className='NamesList'>
            {namesArrayElements}
        </ul>
    );
}

export default NamesList;