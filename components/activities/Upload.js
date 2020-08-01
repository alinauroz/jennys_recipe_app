import React from 'react'
import {Text} from 'react-native'

import {connect} from 'react-redux'

import {save} from '../../actions/save_action.js'

class Upload extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render () {
        return <Text>Upload</Text>
    }
}

const mapStateToProps = (state) => {
    return {"saved" : state.saved}
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        addToSaved : (recipeId) => dispatch(save(recipeId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload)