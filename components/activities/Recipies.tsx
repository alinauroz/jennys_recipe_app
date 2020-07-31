import React from 'react'
import {Text, ScrollView, View, Dimensions, StyleSheet} from 'react-native'

import RecipeCard from '../cards/recipe'
import data from '../../constants/recipies'

export default class Recipies extends React.Component {
    
    constructor(props: any) {
        super(props)
    }

    render () {
        return (
            <ScrollView>
            <View style={styles.container}>
                {
                    data.map(recipe => {
                        return (
                            <RecipeCard 
                                cover={recipe.image}
                                name={recipe.name}
                            />
                        )
                    })
                }
                {
                    data.map(recipe => {
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
        )
    }
}

const styles = StyleSheet.create({
    container : {
        marginTop: 50,
        width: Dimensions.get('window').width - 30,
        padding: 15,
        flexDirection:'row',
        flexWrap:'wrap',
        textAlign: "center"
    },
    card: {
        margin: 10
    }
})