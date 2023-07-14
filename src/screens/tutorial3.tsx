import React from 'react';
import type { PropsWithChildren } from 'react';
import { Button, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { useTheme } from 'react-native-paper';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


function Tutorial3(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const theme = useTheme();
const styles = StyleSheet.create({
    bgColor: {
        backgroundColor: theme.colors.background,
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop:50,
        flexDirection: 'row',
        gap:100,
        justifyContent:'space-around',
        alignItems: 'center',
    },
    button1: {
        borderRadius:10,
        width:110,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:40,
        backgroundColor:'#3D5CFF',
    },
    button2: {
        borderRadius:10,
        width:110,
        borderStyle:'solid',
        borderColor:'#3D5CFF',
        display:'flex',
        borderWidth: 1,
        alignItems:'center',
        justifyContent:'center',
        height:40,
    },
    buttonTitle1: {
        color:'white'
    },
    text:{
        color: theme.colors.primary,
      },
    buttonTitle2: {
        color:'#3D5CFF'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    gap: {
        marginTop: 0,
        marginBottom: 5,
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 20,
        color: theme.colors.primary,
    },
    pavig: {
        marginTop: 40,
    },
    skip: {
        marginTop: 80,
        marginBottom: 20,
    },
    skipContainer: {
        alignSelf: 'flex-end',
        marginRight: 10,
    },
});


    return (
        <SafeAreaView style={styles.bgColor}>
            <View style={[styles.container, styles.bgColor]}>
                <Image style={[styles.skip]} source={require("../assets/illustration3.png")} />
                <Text style={[styles.gap, styles.textBold]}>Create your own </Text>
                <Text style={[styles.gap, styles.textBold]}>study plan</Text>
                <Text style={[styles.gap,styles.text]}>Study according to the </Text>
                <Text style={[styles.gap,styles.text]}>study plan, make study </Text>
                <Text style={[styles.gap,styles.text]}>imore motivated </Text>
                <Image source={require("../assets/pavigation2.png")} style={[styles.gap, styles.pavig]} />
                <View style={[styles.buttonContainer]}>
                    <TouchableOpacity style={styles.button1}><Text style={styles.buttonTitle1}>Sign up</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button2}><Text style={styles.buttonTitle2}>Log in</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Tutorial3;
