import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'


const FoodScreen = () => {
    return (
        <SafeAreaView style={tw`h-full bg-white`}>
            <View>
                <Text>Food</Text>
            </View>
        </SafeAreaView>
    )
}

export default FoodScreen

const styles = StyleSheet.create({})
