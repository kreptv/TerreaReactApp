import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from "../../UIComponents/Input";
import Button from "../../UIComponents/Button";
import styles from "../../UIComponents/Styles";

const DailyThreadPage= ({navigation}) => {

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>Daily Thread Page</Text>
            </View>

            <View style={styles.child}>
            <Text style={styles.text}>Tell us what's up today!</Text>
            <Text></Text>
            <Button text={"Home"} onPress={goHome}></Button>
            </View>
        </View>
    );

    async function goHome() {
        navigation.navigate('Home')
    }

}

export default DailyThreadPage;