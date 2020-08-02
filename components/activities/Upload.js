import React from 'react'
import {Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Alert} from 'react-native'

import {connect} from 'react-redux'

import {save} from '../../actions/save_action.js'
import { TextInput } from 'react-native-paper'

class Upload extends React.Component {
    
    constructor(props) {
        super(props)
    }

    setName = (name) => {
        this.setState({name})
    }

    setImage = (image) => {
        this.setState({image})
    }

    setRecipe = (recipe_to_upload) => {
        this.setState({recipe_to_upload})
    }

    upload = async () => {
        
        if (this.props.token == "") {
            alert("Login to Upload Recipe");
            return;
        }

        let res_ = await fetch("http://localhost:8080/save?"
            + "name=" + this.state.name
            + "image=" + this.state.image
            + "recipe=" + this.state.recipe_to_upload 
        );

        res_ = await res_.json();

    }

    render () {
        return (
            <ScrollView style={styles.main}>
                <Text style={{fontSize: 22, marginTop: 20, marginBottom: 20}}>Upload a Recipe</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Recipe Name"
                    onChangeText = {""}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Recipe Image URL"
                    onChangeText = {""}
                />
                <TextInput
                    style={{...styles.input, height: 200, textAlignVertical: 'top', flex: 1}}
                    placeholder={ "Recipe \n Use Markdown"}
                    onChangeText = {""}
                    multiline={true}
                    numberOfLines={4}
                />
                <TouchableOpacity
                        style={styles.login_button}
                        //onPress = {() => this.props.updateToken(this.state.username + " " + this.state.pass)}
                        onPress = {this.upload}
                    >
                        <Text style={styles.login_button_text}>Upload</Text>
                    </TouchableOpacity>
            </ScrollView>
        )
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
        height: 40,
        width: Dimensions.get('window').width - 30,
        borderBottomWidth: 0,
    },
    login_button: {
        width: 120,
        borderRadius: 5,
        backgroundColor: "#3BAD87",
        marginLeft: Dimensions.get('window').width - 170,
        marginTop: 10,
        padding: 10
    },
    login_button_text: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});

const mapStateToProps = (state) => {
    return {"token" : state.account_reducer.token}
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        addToSaved : (recipeId) => dispatch(save(recipeId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload)