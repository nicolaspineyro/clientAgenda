import React from 'react';
import { View, StyleSheet, Alert, Platform } from 'react-native';
import { Text, Headline, Subheading, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/globalStyles';
import axios from 'axios'

const ClientDetails = ({ navigation, route }) => {

    const { setClientRefresh } = route.params;
    const { name, cellphone, email, company, id } = route.params.item

    const deleteAlert = () => {

        Alert.alert('Warning', 'Delete a client cant be undone.', [
            {
                text: 'Cancel'
            },
            {
                text: 'Delete Anyways', onPress: () => deleteClient()
            }
        ])
    }

    const deleteClient = async () => {
        try {
            if (Platform.OS === 'ios') {
                const url = `http://localhost:3000/clients/${id}`
                await axios.delete(url);
            } else {
                const url = `http://10.0.2.2:3000/clients/${id}`
                await axios.delete(url);
            }
        } catch (error) {
            console.log(error);
        }

        navigation.navigate('Home');
        setClientRefresh(true);

    }
    return (
        <View style={globalStyles.container}>
            <Headline style={globalStyles.headline} >{name}</Headline>
            <Subheading style={styles.subheading}>Cellphone:  <Text>{cellphone}</Text> </Subheading>
            <Subheading style={styles.subheading}>Email:  <Text>{email}</Text> </Subheading>
            <Subheading style={styles.subheading}>Company:  <Text>{company}</Text> </Subheading>
            <Button
                style={styles.button}
                icon='cancel'
                mode='contained'
                onPress={() => deleteAlert()}
            >
                Delete Client
            </Button>
            <FAB
                onPress={() => navigation.navigate('New Client', { setClientRefresh, client: route.params.item })}
                icon='pencil' style={styles.fab} />
        </View>
    )
}

const styles = StyleSheet.create({
    subheading: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: '2.5%'
    },
    button: {
        marginTop: '5%',
        marginHorizontal: '25%',
        backgroundColor: 'red'
    },
    fab: {
        position: 'absolute',
        right: '5%',
        bottom: '5%'
    }
})

export default ClientDetails;