import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 23%;
    padding: 2%;
    margin: 1% 0;
    background-color: #4a4e69;
    border-radius: 5px;
    color: #f2e9e4;

    h2 {
        color: #f2e9e4;
    }

    .date {
        color: #9a8c98;
    }
`

const SmurfCard = props => {

    return(
        <Card>
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </Card>
    )
}

export default SmurfCard