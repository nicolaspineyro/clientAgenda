import React from 'react';
import { Button } from 'react-native-paper';

const HeaderBar = ({ navigation, routes }) => {
    return (
        <Button icon='plus' style={{backgroundColor:'#fff'}} onPress={() => navigation.navigate('New Client')}>
            New Client
        </Button>
    )
}

export default HeaderBar;