import React from 'react'
import {View, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Text, ImageBackground, Alert} from 'react-native'
import Markdown from 'react-native-markdown-display';
import Icon from 'react-native-vector-icons/Ionicons';  

import {connect} from 'react-redux'
import {save} from '../../actions/save_action.js'
import {remove} from '../../actions/remove_action.js'

class Viewer extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            title: this.props.title,
            cover: this.props.cover
        }

    }

    static getDerivedStateFromProps = newProps => {
        console.log(newProps);
        return newProps
    }

    render () {
        return (
            <ScrollView style={styles.container}>
                <Text onPress = {this.props.hide} style={styles.back}>Back</Text>
                <Text style={styles.title}>{this.state.title}</Text>
                <ImageBackground source = {{uri: this.state.cover}} style={styles.cover} />
                
                <View style={{flexDirection: 'row', width: Dimensions.get('window').width-30}}>
                    <Markdown style={{flex: 1}}>
                        {this.state.directions}
                    </Markdown>
                </View>

                <TouchableOpacity 
                    style={styles.add_to_button}
                    onPress = {() => this.props.addToSaved(this.props.id)}
                >
                    <Text style={styles.button_text}>
                        {
                            this.state.liked || true?
                            <><Icon style={styles.button_text} name="heart"></Icon> Remove</>:
                            <><Icon style={styles.button_text} name="heart-outline"></Icon> Save</>
                        }
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        )

    }
}

const styles = StyleSheet.create({
    inp: {
        backgroundColor: "lightgrey",
        padding: 10,
        borderRadius: 5,
        width: Dimensions.get('window').width - 30,
        height: 35,
        fontSize: 16
    },
    title: {
        fontSize: 22,
        marginTop: 20,
        marginBottom: 10
    },
    container : {
        marginTop: 50,
        width: Dimensions.get('window').width - 30,
        padding: 15,
        flexDirection:'row',
        flexWrap:'wrap',
        textAlign: "center"
    },
    back : {
        fontWeight : "bold"
    },
    cover: {
        width: Dimensions.get('window').width-50,
        borderRadius: 10,
        height: 200,
        borderRadius: 10,
        overflow: "hidden",
        marginTop: 5,
        marginBottom: 10
    },
    add_to_button: {
        width: 180,
        height: 45,
        padding: 10,
        borderRadius: 5,
        textAlign: "center",
        marginLeft: Dimensions.get('window').width/2 - 120,
        backgroundColor: "#3BAD87",
    },
    button_text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    }
});

const mapStateToProps = (state) => {
    return {"saved" : state.saved}
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        addToSaved : (recipeId) => dispatch(save(recipeId)),
        removeFromSaved: (recipeId) => dispatch(remove(recipeId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer)