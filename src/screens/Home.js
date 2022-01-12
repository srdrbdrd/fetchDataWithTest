import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';
import { useFocusEffect } from '@react-navigation/native';

const Home = props => {
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            checkStorage();
            console.log('callback');
        }, []),
    );

    const getSimpsonsFromApiAsync = async () => {
        try {
            const response = await fetch(
                'https://5fc9346b2af77700165ae514.mockapi.io/simpsons',
            );
            const json = await response.json();
            storeData(json);
            setData(json);
        } catch (error) {
            console.error(error);
        }
    };

    const storeData = async value => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('LOCAL_DATA', jsonValue);
        } catch (e) {
            console.log(e);
        }
    };

    const checkStorage = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('LOCAL_DATA');
            if (jsonValue != null) {
                let value = JSON.parse(jsonValue);
                setData(value);
                console.log('Data from store');
            } else {
                getSimpsonsFromApiAsync();
                console.log('Data from api');
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const deleteItem = ({ id }) => {
        let filterArray = data.filter((item, index) => {
            if (item.id !== id) {
                return item;
            }
        });
        setData(filterArray);
        storeData(filterArray);
    };

    const renderItem = ({ item, index }) => (
        <ListItem
            name={item.name}
            avatar={item.avatar}
            onPressDelete={() => deleteItem(item)}
            onPressDetail={() =>
                props.navigation.navigate('Details', {
                    item,
                })
            }
        />
    );

    return (
        <View style={styles.screenContainer}>
            {isLoading ? (
                <ActivityIndicator
                    style={styles.activityIndicatorStyle}
                    size={'large'}
                />
            ) : (
                <>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                    <AddButton
                        onPressAddItem={() =>
                            props.navigation.navigate('AddNewCharacter', {
                                data,
                            })
                        }
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    activityIndicatorStyle: {
        justifyContent: 'center',
        flex: 1,
    },
});
export default Home;
