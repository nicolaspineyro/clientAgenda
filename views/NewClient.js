import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Platform } from 'react-native';
import { Button, Headline, TextInput } from 'react-native-paper';

import globalStyles from '../styles/globalStyles';


const NewClient = ({ navigation, route }) => {

    useEffect(() => {
        if (route.params.client) {
            const { name, cellphone, email, company } = route.params.client;
            setName(name);
            setCellphone(cellphone);
            setEmail(email);
            setCompany(company)
        }
    }, [])
    const { setClientRefresh } = route.params;

    const [name, setName] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');

    const saveClient = async () => {
        if (name.length === 0 || cellphone.length === 0 || email.length === 0 || company.length === 0) {
            Alert.alert('Error', 'All the fields are required', [{
                text: 'Ok'
            }])
            return;
        }

        const client = { name, cellphone, email, company }

        if (route.params.client) {
            const { id } = route.params.client;
            client.id = id;
            try {
                if (Platform.OS === 'ios') {
                    const url = `http://localhost:3000/clients/${id}`
                    await axios.put(url, client);
                } else {
                    const url = `http://10.0.2.2:3000/clients/${id}`
                    await axios.put(url, client);
                }
            } catch (error) {
                console.log(error);
            }

        } else {
            try {
                if (Platform.OS === 'ios') {
                    const url = 'http://localhost:3000/clients'
                    await axios.post(url, client);
                } else {
                    const url = 'http://10.0.2.2:3000/clients'
                    await axios.post(url, client);
                }

            } catch (error) {
                console.log(error);
            }
        }

        setClientRefresh(true);
        navigation.navigate('Home')
        setName('');
        setCellphone('');
        setEmail('');
        setCompany('');

    }

    return (
        <View style={globalStyles.container}>
            <Headline style={globalStyles.headline}>Add new client</Headline>
            <TextInput
                style={styles.input}
                label='Name'
                placeholder='George'
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput
                style={styles.input}
                label='Cellphone'
                placeholder='+549223598462'
                onChangeText={(text) => setCellphone(text)}
                value={cellphone}
            />
            <TextInput
                style={styles.input}
                label='Email'
                placeholder='Email@email.com'
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                label='Company'
                onChangeText={(text) => setCompany(text)}
                value={company}
            />
            <Button icon='check-circle' style={styles.button} mode='contained' onPress={() => saveClient()}>
                Submit
            </Button>


        </View>

    )
}



const styles = StyleSheet.create({
    input: {
        marginVertical: '2.5%'
    },
    button: {
        marginHorizontal: '25%',
        marginVertical: '4%'
    }
})

export default NewClient;