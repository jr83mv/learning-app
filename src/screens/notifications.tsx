import React, { useState } from 'react'
import { Alert, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'react-native-paper';
function Notifications(): JSX.Element {

    const WindowsWidth = Dimensions.get('window').width;
    const WindowsHeight = Dimensions.get('window').height;
    const theme = useTheme();
    const styles = StyleSheet.create({
        bgColor: {
            backgroundColor: theme.colors.primaryContainer
        },
        innerContainer2: {
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        innerContainer1: {
            gap:10,
        },
        title: {
            color: theme.colors.primary,
            fontWeight: 'bold',
            fontSize: 22,
        },
        text: {
            fontSize: 18,
            color: theme.colors.primary,
        },
 
    })

    return (<SafeAreaView style={[styles.bgColor]}>
        <View style={[styles.innerContainer1]}>
            <Text style={[styles.title]}>Notifications</Text>
            <View style={[styles.innerContainer2]}>
                <Text style={[styles.text]}>message</Text>
                <Text style={[styles.text]}>notification</Text>
            </View>
        </View>
        <ScrollView>


            
        </ScrollView>
    </SafeAreaView>
    )
}


export default Notifications;