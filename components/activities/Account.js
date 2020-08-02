import React from 'react'

import { TextInput, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

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

    setUsername = (text) => {
        this.setState({username: text})
    }

    setPassword = (text) => {
        this.setState({pass: text})
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
                        onChangeText = {this.setUsername}
                    />
                    <TextInput style={styles.input}
                        placeholder = "Password"
                        onChangeText = {this.setPassword}
                    />
                    <TouchableOpacity
                        style={styles.login_button}
                        onPress = {() => this.props.updateToken(this.state.username + " " + this.state.pass)}
                    >
                        <Text style={styles.login_button_text}>Login</Text>
                    </TouchableOpacity>
                    <Text>{this.props.token}</Text>
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
    login_button: {
        width: 120,
        borderRadius: 5,
        backgroundColor: "#3BAD87",
        marginLeft: Dimensions.get('window').width - 150,
        marginTop: 10,
        padding: 10
    },
    login_button_text: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
})

const mapStateToProps = (state) => {
    return {"token" : state.account_reducer.token}
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        updateToken : (recipeId) => dispatch(accountAction(recipeId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)

