import React from 'react'
import {View, ScrollView, Text, TextInput, StyleSheet, Dimensions, Alert} from 'react-native'

import data from "../../constants/recipies"
import RecipeCard from '../cards/recipe'

interface RecipieInterface {
    name: string,
    image: String,
    recipie: String
}

interface ExploreInterface {
    query: string
    recipies: any[]
}

export default class Explore extends React.Component <ExploreInterface, ExploreInterface> {
    
    constructor(props: any) {
        super(props)
        this.state = {
            query: "",
            recipies: []
        }
    }

    search = async () => {
        let newRecipies: any[] = []
        for (let i=0; i<data.length; i++) {
            if (data[i].name.indexOf(this.state.query) > -1) {
                newRecipies.push(data[i])
            }
        }
        this.setState({recipies: newRecipies})
    }

    onChange_ = (e: string) => {
        this.setState({query: e});
        if (e == "") return this.setState({recipies: []})
        this.search();
    }

    render () {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inp}
                    placeholder="Search"
                    onChangeText = {this.onChange_}
                />
                <ScrollView>
                <View style={styles.container2}>
                    {
                        this.state.recipies.map(recipe => {
                            return (
                                <RecipeCard 
                                    cover={recipe.image}
                                    name={recipe.name}
                                />
                            )
                        })
                    }
                </View>
                </ScrollView>
            </View>
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
    container : {
        marginTop: 50,
        width: Dimensions.get('window').width - 30,
        padding: 15,
        flexDirection:'row',
        flexWrap:'wrap',
        textAlign: "center"
    },
    container2 : {
        marginTop: 50,
        width: Dimensions.get('window').width - 30,
        flexDirection:'row',
        flexWrap:'wrap',
        textAlign: "center"
    },
    card: {
        margin: 10
    }
});