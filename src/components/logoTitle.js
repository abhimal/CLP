import React from 'react';
import { View, Text, Image } from 'react-native';

function LogoTitle() {
    return (
    <View style={{justifyContent: 'center' ,alignItems:'center'}}>
        <Image
         style={{ width: 80, height: 80 }}
         source={require('../assets/adf36e4a-a83e-4320-93d1-05717f6b93fd_200x200.png')}     
        />
    </View>
    )
}

export default LogoTitle
