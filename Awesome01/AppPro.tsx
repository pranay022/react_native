import React from 'react'

import { 
    View,
    Text,
    StyleSheet,
    useColorScheme,
 } from 'react-native'


function AppPro() : JSX.Element {
    const isDarkMOde = useColorScheme() === 'dark'


    return(
        <View style={styles.container}>
            <Text style={isDarkMOde ? styles.whiteText : styles.darkText }>Hello World !</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        // marginTop:90
    },
    whiteText:{
        color: '#ffffff'
    },
    darkText:{
        color: '#000000'
    }
})


export default AppPro