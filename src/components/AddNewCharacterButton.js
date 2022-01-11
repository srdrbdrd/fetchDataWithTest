import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { convertHeight, convertWidth } from '../helpers/responsiveUiHelper';

const AddNewCharacterButton = props => {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={props.onPressAddNewCharacterButton}>
            <Text style={styles.buttonTextStyle}>Add Character</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        height: convertHeight(50),
        width: convertWidth(380),
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: convertWidth(8),
        marginTop: convertWidth(12),
        backgroundColor: '#007AFF',
        alignItems: 'center',
    },
    buttonTextStyle: {
        fontSize: convertWidth(20),
        marginHorizontal: 10,
        color: 'white',
        fontWeight: '600',
    },
});

export default AddNewCharacterButton;
