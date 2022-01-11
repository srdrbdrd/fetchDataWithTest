import React from 'react'
import { ScrollView } from 'react-native'
import AddNewCharacterButton from '../components/AddNewCharacterButton'
import Input from '../components/Input'


const AddNewCharacter = () => {
    return (
        <ScrollView style={{
            flex: 1
        }}>
            <Input textInputHeader="Name Surname" />
            <Input textInputHeader="Job Title" />
            <Input textInputHeader="About Him/Her" about />
            <Input textInputHeader="Image Link" />
            <AddNewCharacterButton onPressAddNewCharacterButton={null} />
        </ScrollView>
    )
}

export default AddNewCharacter
