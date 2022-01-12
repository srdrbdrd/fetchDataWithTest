import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { convertHeight, convertWidth } from '../helpers/responsiveUiHelper';

const Input = props => {
    return (
        <View style={[props.about ? styles.containerAbout : styles.container]}>
            <Text style={styles.header}>{props.textInputHeader}</Text>

            <TextInput
                style={[
                    props.about ? styles.textInputStyleAbout : styles.textInputStyle,
                ]}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={props.changeOnText}
                multiline={props.about ? true : false}
                value={props.value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: convertHeight(80),
        width: convertWidth(400),
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: convertWidth(2),
        marginTop: convertWidth(12),
    },
    containerAbout: {
        height: convertHeight(140),
        width: convertWidth(400),
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: convertWidth(2),
    },
    header: {
        textAlignVertical: 'bottom',
        fontSize: convertWidth(20),
        marginHorizontal: 10,
        color: 'black',
        fontWeight: '600',
    },
    textInputStyleAbout: {
        flex: 1,
        fontWeight: 'bold',
        marginHorizontal: convertWidth(10),
        fontSize: convertWidth(16),
        backgroundColor: 'white',
        borderWidth: convertWidth(1),
        borderColor: 'grey',
        borderRadius: convertWidth(8),
        textAlignVertical: 'top',
    },
    textInputStyle: {
        flex: 1,
        fontWeight: 'bold',
        marginHorizontal: convertWidth(10),
        fontSize: convertWidth(16),
        backgroundColor: 'white',
        borderWidth: convertWidth(1),
        borderColor: 'grey',
        borderRadius: convertWidth(8),
    },
});

export default Input;
