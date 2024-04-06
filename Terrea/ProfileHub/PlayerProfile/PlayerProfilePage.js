import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from "../../UIComponents/Input";
import Button from "../../UIComponents/Button";
import styles from "../../UIComponents/Styles";

const PlayerProfilePage= ({navigation}) => {

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>Player Profile</Text>
            </View>

            <View style={styles.child}>
            <Text style={styles.text}>Your Player Profile</Text>
            <Text></Text>
            <Button text={"Abstract Blob"} onPress={goToBlobPage}></Button>
            </View>
        </View>
    );

    async function goToBlobPage() {
        navigation.navigate('Blob Profile')
    }

}

export default PlayerProfilePage;