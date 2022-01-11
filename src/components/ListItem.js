import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { convertWidth, convertHeight } from '../helpers/responsiveUiHelper';

const ListItem = props => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
            <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}
                onPress={props.onPressDetail}>
                <Image
                    source={{ uri: props.avatar }}
                    style={{
                        width: convertHeight(56),
                        height: convertHeight(56),
                        resizeMode: 'contain',
                        margin: convertHeight(10),
                    }}
                />
                <Text
                    style={{
                        fontSize: convertWidth(22),
                        color: 'black',
                        fontWeight: '600',
                        marginLeft: convertWidth(10),
                    }}>
                    {props.name}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ marginRight: convertWidth(12) }}
                onPress={props.onPressDelete}>
                <Image
                    source={require('../assets/icons8-delete-48.png')}
                    style={{
                        width: convertHeight(32),
                        height: convertHeight(32),
                        resizeMode: 'contain',
                    }}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ListItem;
