import React, { useState } from 'react'

import { Alert, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'react-native-paper';
function Cards(props1: any): JSX.Element {

    const WindowsWidth = Dimensions.get('window').width;
    const WindowsHeight = Dimensions.get('window').height;
    const theme = useTheme();
    const styles = StyleSheet.create({
        outerContainer: {
            backgroundColor: theme.colors.primaryContainer,
            
        },
        text: {
            color: theme.colors.primary,
            fontSize: 14,
        },
        title: {
            fontWeight: 'bold',
            fontSize: 16,
            color: theme.colors.primary,
        },
        container: {
            flexDirection: 'row',
            gap:30,
            alignItems:'center',
            backgroundColor: theme.colors.secondaryContainer,
            borderRadius:10,
            padding:5,
            marginBottom:10,
        },
        innerContainer1: {
            flexDirection: 'column',
            gap:5,
        },
        innerContainer2:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',
            gap:5,
        },
        profile: {
            alignSelf: 'center',
        },
        shadowProp: {  
            shadowOffset: {width: -2, height: 4},  
            shadowColor: '#171717',  
            shadowOpacity: 0.2,  
            shadowRadius: 3,  
          },  
    })
    const daysSincePosted = (postedDate: string) => {
        return Math.round((new Date().getTime() - new Date(postedDate).getTime()) / (1000 * 3600 * 24));
    }

    return (
        <View style={[styles.container,styles.shadowProp]}>
            <Image source={require('../assets/Image.png')} />
            <View style={[styles.innerContainer1]}>
            <Text style={[styles.title]}>{props1.data.name}</Text>
                <Text style={[styles.text]}>{props1.data.company}</Text>
                <Text style={[styles.text]}>{props1.data.location}</Text>
                <View style={[styles.innerContainer2]}>
                    <Text style={[styles.text]}>Posted {daysSincePosted(props1.data.postedDate)} day ago</Text>
                    <Text style={[styles.text]} >•</Text>
                    <Text style={[styles.text]}>{props1.data.applicants} Applicants</Text>
                </View>
            </View>
        </View>
    )
}


export default Cards;