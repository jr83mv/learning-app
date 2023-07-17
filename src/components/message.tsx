import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";

function Message(props: any): JSX.Element {

    const theme = useTheme();
    const styles = StyleSheet.create({
        innerContainer1: {
            flexDirection: 'row',
            gap: 20,
        },
        innerContainer2: {
            flexDirection: 'column',
            justifyContent: 'space-around',
        },
        container: {
            padding: 10,
            margin: 10,
            borderRadius: 20,
            gap: 10,
            flexDirection: 'column',
            backgroundColor: theme.colors.secondaryContainer,
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
        shadowProp: {
            shadowOffset: { width: -2, height: 4 },
            shadowColor: '#171717',
            shadowOpacity: 0.2,
            shadowRadius: 3,
        },
    });

    return (
        <View style={[styles.container, styles.shadowProp]}>
            <View style={[styles.innerContainer1]}>
                <Image source={require('../assets/mes.png')} />
                <View style={[styles.innerContainer2]}>
                    <Text style={[styles.text]}>{'Bert Pullman'}</Text>
                    <Text style={[styles.text]}>{'Online'}</Text>
                </View>
                <Text style={[styles.text]}>{'04:32 pm'}</Text>
            </View>
            <View style={[styles.innerContainer1]}>
                <Text style={[styles.text]}>{'Congratulations on completing the first lesson, keep up the good work!'}</Text>
            </View>
        </View>
    )
}

export default Message;
