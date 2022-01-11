import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { convertHeight, convertWidth } from '../helpers/responsiveUiHelper';

const Details = props => {
    const { name, job, avatar, about } = props.route.params.item;
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, margin: convertWidth(20), alignItems: 'center' }}>
                <Image
                    source={{ uri: avatar }}
                    style={{
                        resizeMode: 'contain',
                        height: convertHeight(220),
                        width: convertHeight(220),
                    }}
                />
                <Text
                    style={{
                        padding: convertWidth(5),
                        fontSize: convertWidth(28),
                        fontWeight: '600',
                        color: 'black',
                    }}>
                    {name}
                </Text>
                <Text
                    style={{
                        paddingTop: convertWidth(2),
                        paddingBottom: convertWidth(10),
                        fontSize: convertWidth(20),
                    }}>
                    {job}
                </Text>
                <Text style={{ fontSize: convertWidth(16) }}>{about}</Text>
            </View>
        </ScrollView>
    );
};

export default Details;
