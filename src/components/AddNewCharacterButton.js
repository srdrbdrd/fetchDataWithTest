import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { convertHeight, convertWidth } from '../helpers/responsiveUiHelper';

const AddNewCharacterButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                height: convertHeight(60),
                width: convertWidth(380),
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: convertWidth(8),
                marginTop: convertWidth(12),
                backgroundColor: '#007AFF',
                alignItems: 'center',
            }}
            onPress={props.onPressAddNewCharacterButton}>
            <Text style={{
                fontSize: convertWidth(20),
                marginHorizontal: 10,
                color: 'white',
                fontWeight: '600',
            }}>Add Character</Text>
        </TouchableOpacity>
    );
};

export default AddNewCharacterButton;
