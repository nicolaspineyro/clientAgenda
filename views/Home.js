import React, { useEffect, useState } from 'react';
import { Text, View, Platform, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import { List, Headline, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/globalStyles'


const Home = ({ navigation, route }) => {

    const [clientRefresh, setClientRefresh] = useState(true)
    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (clientRefresh) {
            getClients();
        }
    }, [clientRefresh])

    const getClients = async () => {
        try {
            setIsLoading(true)
            if (Platform.OS === 'ios') {
                const url = ' http://localhost:3000/clients'
                const result = await axios.get(url);
                setClients(result.data)
            } else {
                const url = ' http://10.0.2.2:3000/clients'
                const result = await axios.get(url);
                setClients(result.data)
            }
            setClientRefresh(false)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    }
    return (
        <>
            {isLoading ? <ActivityIndicator size='large' /> : <View style={globalStyles.container}>
                <Button style={{ marginTop: '2.5%', marginHorizontal: '2.5%' }} icon='plus' onPress={() => navigation.navigate('New Client', { setClientRefresh })} >Add new client</Button>
                {clients.length > 0 ? <Headline style={globalStyles.headline}>Clients</Headline> : <Headline style={globalStyles.headline}>There are no clients, add one!</Headline>}
                <FlatList
                    data={clients}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <List.Item
                            title={item.name}
                            description={item.company}
                            onPress={() => navigation.navigate('Client Details', { item, setClientRefresh })}
                        />
                    )
                    }
                />
                <FAB onPress={() => navigation.navigate('New Client', { setClientRefresh })} icon='plus' style={styles.fab} />
            </View>}
        </>
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        right: '5%',
        bottom: '5%'
    }
})

export default Home;