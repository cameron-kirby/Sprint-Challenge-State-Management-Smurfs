import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { getData, postSmurf } from '../actions'

const initialNewSmurfValue = {
    name: "",
    age: 0,
    height: ""
  };


const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState(initialNewSmurfValue)

    const handleGetData = event => {
        event.preventDefault()
        props.getData()
    }

    const handleChanges = event=> {
        setNewSmurf({
            ...newSmurf,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault()
        const smurf = {
            name: newSmurf.name,
            age: parseInt(newSmurf.age),
            height: newSmurf.height
        }
        axios
            .post('http://localhost:3333/smurfs', {
            name: smurf.name,
            age: smurf.age,
            height: smurf.height
        })
    }

    return (
        <>
            {props.isFetchingData ? (
                <div>**we are fetching data**</div>
            ) : (
                <button onClick={handleGetData}>Fetch Smurfs</button>
            )}
            <form onSubmit={handleSubmit}>
                <h2>New Smurf:</h2>
                <label>
                Name:
                    <input
                        name="name"
                        value={newSmurf.name}
                        onChange={handleChanges}
                    />
                </label>
                <label>
                Age:
                    <input
                        name="age"
                        value={newSmurf.age}
                        onChange={handleChanges}
                    />
                </label>
                <label>
                Height:
                    <input
                        name="height"
                        value={newSmurf.height}
                        onChange={handleChanges}
                    />
                </label>
                <button>Add Smurf</button>
            </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(SmurfForm)