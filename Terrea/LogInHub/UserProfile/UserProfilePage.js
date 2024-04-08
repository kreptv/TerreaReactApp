import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from "../../UIComponents/Input";
import Button from "../../UIComponents/Button";
import styles from "../../UIComponents/Styles";

//import auth from '@react-native-firebase/auth';

const UserProfilePage= ({navigation}) => {

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>User Settings</Text>
            </View>

            <View style={styles.child}>
            <Text style={styles.text}>Settings here</Text>
            <Text></Text>
            <Button text={"Home"} onPress={goHome}></Button>
            </View>
        </View>
    );

    async function goHome() {
        navigation.navigate('Home')
    }
/*
    async function logout(){
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    }*/

}

export default UserProfilePage;