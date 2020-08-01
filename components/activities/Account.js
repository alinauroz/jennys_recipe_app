import React from 'react'

import { TextInput, View, StyleSheet, Dimensions } from 'react-native'

import {connect} from 'react-redux'
import {accountAction} from '../../actions/account_action'

class Account extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    login = async (username, password) => {

    }

    render () {
        if  (this.state.loggedIn) {
            return <></>
        }
        else {
            return (
                <View style={styles.main}>
                    <TextInput style={styles.input}
                        placeholder = "Username"
                    />
                    <TextInput style={styles.input}
                        placeholder = "Password"
                    />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    main : {
        width: Dimensions.get('window').width - 30,
        padding : 15,
        marginTop: 50
    },
    input : {
        backgroundColor: "lightgrey",
        padding : 10,
        marginTop : 10,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: "bold",
        width: Dimensions.get('window').width - 30,
    },
})

const mapStateToProps = (state) => {
    return {"token" : state.token}
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        updateToken : (recipeId) => dispatch(accountAction(recipeId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)

