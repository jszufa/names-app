import './Names.css';
import { useState } from 'react';
import NamesList from './NamesList';

function Names(props) {

    let inputRef;

    const updateNames = (text) => {

        /* console.log('Uruchomiono updateUsers') */
        let index = Date.now();

        props.setNames(
            /* console.log('Uruchomiono setState') */
            props.names.concat({ id: index, name: text }));

        if (inputRef) {
            inputRef.value = '';
        }
    }

    const removeName = (nameId) => {
        /* console.log('removeUser function'); */
        console.log(nameId);

        props.setNames(
            props.names.filter(name => name.id !== nameId)
        )

    }


    return (
        <div className='names'>

            <input ref={(data) => { inputRef = data }} type="text" placeholder='Enter name' onKeyDown={(event) => { if (inputRef && event.key === 'Enter') { updateNames(inputRef.value) } }} />
            <button onClick={() => { if (inputRef) { updateNames(inputRef.value) } }}>Add name</button>
            <NamesList names={props.names} removeMethod={removeName} />

        </div>
    )
}

export default Names;