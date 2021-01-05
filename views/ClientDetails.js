import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Headline, Subheading, Button } from 'react-native-paper';
import globalStyles from '../styles/globalStyles';

const ClientDetails = ({ route }) => {

    const { name, cellphone, email, company } = route.params.item
    return (
        <View style={globalStyles.container}>
            <Headline style={globalStyles.headline} >{name}</Headline>
            <Subheading style={styles.subheading}>Cellphone:  <Text>{cellphone}</Text> </Subheading>
            <Subheading style={styles.subheading}>Email:  <Text>{email}</Text> </Subheading>
            <Subheading style={styles.subheading}>Company:  <Text>{company}</Text> </Subheading>
            <Button style={styles.button} icon='delete'  mode='contained'>Delete Client</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    subheading: {
        fontWeight: 'bold',
        fontSize: 20
    },
    button: {
        marginTop: '5%',
        marginHorizontal: '25%',
        backgroundColor: 'red'
    }
})

export default ClientDetails;