import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { convertHeight, convertWidth } from '../helpers/responsiveUiHelper';

const Details = props => {
    const { name, job, avatar, about } = props.route.params.item;
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.viewContainerStyle}>
                <Image
                    source={{ uri: avatar }}
                    style={styles.imageStyle}
                />
                <Text
                    style={styles.headerNameTextStyle}>
                    {name}
                </Text>
                <Text
                    style={styles.headerJobTextStyle}>
                    {job}
                </Text>
                <Text style={styles.aboutTextStyle}>{about}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    viewContainerStyle: { flex: 1, margin: convertWidth(20), alignItems: 'center' },
    imageStyle: {
        resizeMode: 'contain',
        height: convertHeight(220),
        width: convertHeight(220),
    },
    headerNameTextStyle: {
        padding: convertWidth(5),
        fontSize: convertWidth(28),
        fontWeight: '600',
        color: 'black',
    },
    headerJobTextStyle: {
        paddingTop: convertWidth(2),
        paddingBottom: convertWidth(10),
        fontSize: convertWidth(20),
    },
    aboutTextStyle: {
        fontSize: convertWidth(16)
    }



})


export default Details;
