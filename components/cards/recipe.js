import React from 'react'
import {View, ImageBackground, Text, StyleSheet, Dimensions, Alert} from 'react-native'

export default class RecipeCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <View style = {styles.container}>
                <ImageBackground source = {{uri: this.props.cover}} style={styles.bg}>
                    <View style={styles.fg}>
                        <Text style={styles.fg_text}>{this.props.name}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width/2 - 45,
        height: Dimensions.get('window').width/2 - 45,
        borderRadius: 10,
        overflow: "hidden",
        margin: 7,
        alignItems: "flex-start",
        flexWrap: 'wrap'
    },
    bg: {
        width: "100%",
        height: "100%",
        borderRadius: 50
    },
    fg: {
        width: "100%",
        height: "100%",
        backgroundColor: "#00000088",
        textAlignVertical: "center",
        textAlign: "center",
        color: "white",
    },
    fg_text: {
        textAlignVertical: "center",
        color: "white",
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: Dimensions.get('window').width/4 - 50
    }
})

