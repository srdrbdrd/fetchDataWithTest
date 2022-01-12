import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import AddNewCharacterButton from '../components/AddNewCharacterButton';
import Input from '../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddNewCharacter = props => {
    const data = props.route.params.data;
    const [newData, setNewData] = useState(data);

    const [textName, setTextName] = useState('');
    const [textJob, setTextJob] = useState('');
    const [textAbout, setTextAbout] = useState('');
    const [textImageLink, setTextImageLink] = useState('');

    const idChecker = () => {
        let randomId = (Math.round(Math.random() * 1000) + 1).toString();
        if (data.some(data => data.id == randomId)) {
            idChecker();
        } else {
            return randomId;
        }
    };

    const inputChecker = () => {
        if (!textName.trim() || !textJob.trim() || !textAbout.trim() || !textImageLink.trim()) {
            Alert.alert("Please fill all fields");
        } else {
            addNewCharacter()
        }
    }

    const addNewCharacter = () => {
        let newDataArray = [
            ...newData, {
                name: textName,
                avatar: textImageLink,
                job: textJob,
                id: idChecker(),
                about: textAbout,
            }
        ];
        setNewData(newDataArray)
        storeData(newDataArray)
    };

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('LOCAL_DATA', jsonValue)
        } catch (e) {
            console.log(e)
        } finally {
            props.navigation.goBack();
        }
    }


    return (
        <ScrollView
            style={{
                flex: 1,
            }} removeClippedSubviews={false}>
            <Input
                textInputHeader="Name Surname"
                changeOnText={text => {
                    setTextName(text);
                }}
                value={textName}
            />
            <Input
                textInputHeader="Job Title"
                changeOnText={text => {
                    setTextJob(text);
                }}
                value={textJob}
            />
            <Input
                textInputHeader="About Him/Her"
                about
                changeOnText={text => {
                    setTextAbout(text);
                }}
                value={textAbout}
            />
            <Input
                textInputHeader="Image Link"
                changeOnText={text => {
                    setTextImageLink(text);
                }}
                value={textImageLink}
            />
            <AddNewCharacterButton onPressAddNewCharacterButton={() => inputChecker()} />
        </ScrollView>
    );
};

export default AddNewCharacter;
