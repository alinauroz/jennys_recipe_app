import React from 'react'
import {View, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Text, ImageBackground} from 'react-native'
import Markdown from 'react-native-easy-markdown';
import Icon from 'react-native-vector-icons/Ionicons';  

export default class Viewer extends React.Component {
    constructor(props) {
        super (props)
        console.log(props)
    }
    render () {
        return (
            <ScrollView style={styles.container}>
                <Text onPress = {() => alert("hello")} style={styles.back}>Back</Text>
                <Text style={styles.title}>{this.props.title}</Text>
                <ImageBackground source = {{uri: this.props.cover}} style={styles.cover} />
                
                <Markdown>
                    {
                        '## Ingridients\n\n' +

                        '* Tea Leaves \n' +
                        '* Milk \n' +
                        '* Sugar _(Optional)_ \n\n'
                    }
                </Markdown>

                <TouchableOpacity style={styles.add_to_button}>
                    <Text style={styles.button_text}>
                        <Icon style={styles.button_text} name="heart-outline"></Icon> Hello
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