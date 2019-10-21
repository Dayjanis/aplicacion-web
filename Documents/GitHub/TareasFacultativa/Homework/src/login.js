import React from 'react';

import {
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';

const Login =(props) =>{
    const {
        cambiarpantalla,
        onChangeText,
        usuario,
    }= props;

    return(
        <View>
            <Text>Login </Text>
            <TextInput
            placeholder="Ingrese su nombre"
            defaultValue={usuario}
            onChangeText={onChangeText}
           
            />
            <Button
            title={'Pushme!'}
            onPress={() => {cambiarpantalla ('Inicio');}
        }
            />
        
        </View>
    );
};

export default Login;