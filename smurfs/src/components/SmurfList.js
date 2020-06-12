import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import SmurfCard from './SmurfCard'

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const SmurfList = props => {
    console.log(props)
    return (
        <CardList>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                props.smurfs.map(smurf => {
                    return <SmurfCard key={smurf.id} smurf={smurf} />
                })
            )}
        </ CardList>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(SmurfList)