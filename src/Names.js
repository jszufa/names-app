import './Names.css';
import NamesList from './NamesList';

function Names(props) {

    let inputRef;

    const updateNames = (text) => {

        let index = Date.now();

        let updatedNames = props.names.concat({ id: index, name: text });

        sessionStorage.setItem('names', JSON.stringify(updatedNames));

        props.setNames(updatedNames);

        if (inputRef) {
            inputRef.value = '';
        }
    }

    const removeName = (nameId) => {

        sessionStorage.setItem('names', JSON.stringify(props.names.filter(name => name.id !== nameId)));

        props.setNames(
            props.names.filter(name => name.id !== nameId)
        )
    }


    return (
        <div className='names'>

            <input ref={(data) => { inputRef = data }} type='text' placeholder='Enter name' onKeyDown={(event) => { if (inputRef && event.key === 'Enter') { updateNames(inputRef.value) } }} />
            <button onClick={() => { if (inputRef) { updateNames(inputRef.value) } }}>Add name</button>
            <NamesList names={props.names} removeMethod={removeName} />

        </div>
    )
}

export default Names;