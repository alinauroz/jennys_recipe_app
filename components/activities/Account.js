import React from 'react'

import { TextInput, Text, View, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native'

import {connect} from 'react-redux'
import {accountAction} from '../../actions/account_action'

class Account extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            msg : ""
        }
    }

    login = async () => {
        await this.setState({msg: ""})
        let username = this.state.username;
        let password = this.state.pass;
        let token = await fetch("http://localhost:8080/login?username=" + username + "&pass=" + password);
        token = await token.json();
        if (token.err) {
            this.setState({msg: "Invalid username or password"})
        }
        else{
            this.props.updateToken(token.token)
        }
    }

    setUsername = (text) => {
        this.setState({username: text})
    }

    setPassword = (text) => {
        this.setState({pass: text})
    }

    signOut = () => {
        this.setState({msg: ""});
        this.props.updateToken("");
    }

    render () {
        if  (this.props.token) {
            return (
                <>
                    <TouchableOpacity 
                        style={styles.signout_button}
                        onPress = {this.signOut}
                    >
                        <Text style={styles.signout_button_text}>Sign Out</Text>
                    </TouchableOpacity>
                </>
            )
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
                        //onPress = {() => this.props.updateToken(this.state.username + " " + this.state.pass)}
                        onPress = {this.login}
                    >
                        <Text style={styles.login_button_text}>Login</Text>
                    </TouchableOpacity>
                    <Text>{this.props.token +" "+ this.state.msg}</Text>
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
    },
    signout_button: {
        width: 150,
        height: 50,
        padding: 15,
        backgroundColor: "lightgrey",
        marginTop: 100,
        marginLeft: Dimensions.get('window').width/2 - 80,
        borderRadius: 5,
    },
    signout_button_text: {
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

