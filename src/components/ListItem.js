import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { convertWidth, convertHeight } from '../helpers/responsiveUiHelper';

const ListItem = props => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                style={styles.leftCharacterContainer}
                onPress={props.onPressDetail}>
                <Image
                    source={{ uri: props.avatar }}
                    style={styles.characterImageStyle}
                />
                <Text
                    style={styles.characterNameTextStyle}>
                    {props.name}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.deleteIconContainerStyle}
                onPress={props.onPressDelete}>
                <Image
                    source={require('../assets/icons8-delete-48.png')}
                    style={styles.deleteIconImageStyle}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftCharacterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    characterImageStyle: {
        width: convertHeight(56),
        height: convertHeight(56),
        resizeMode: 'contain',
        margin: convertHeight(10),
    },
    characterNameTextStyle: {
        fontSize: convertWidth(20),
        color: 'black',
        fontWeight: '600',
        marginLeft: convertWidth(10),
    },
    deleteIconContainerStyle: {
        marginRight: convertWidth(12)
    },
    deleteIconImageStyle: {
        width: convertHeight(32),
        height: convertHeight(32),
        resizeMode: 'contain',
    }


});

export default ListItem;
