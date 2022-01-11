import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { convertHeight } from '../helpers/responsiveUiHelper';

const AddButton = props => {
    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                bottom: convertHeight(10),
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={props.onPressAddItem}>
            <Image
                source={require('../assets/icons8-add-48.png')}
                style={{
                    width: convertHeight(64),
                    height: convertHeight(64),
                    resizeMode: 'contain',
                }}
            />
        </TouchableOpacity>
    );
};

export default AddButton;
