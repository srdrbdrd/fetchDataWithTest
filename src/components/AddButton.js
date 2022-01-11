import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { convertHeight } from '../helpers/responsiveUiHelper';

const AddButton = props => {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={props.onPressAddItem}>
            <Image
                source={require('../assets/icons8-add-48.png')}
                style={styles.imageStyle}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: convertHeight(10),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width: convertHeight(64),
        height: convertHeight(64),
        resizeMode: 'contain',
    },
});

export default AddButton;
