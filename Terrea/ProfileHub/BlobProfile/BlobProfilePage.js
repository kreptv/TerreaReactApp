import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from "../../UIComponents/Input";
import Button from "../../UIComponents/Button";
import styles from "../../UIComponents/Styles";

const PlayerProfilePage= ({navigation}) => {

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>Blob Profile</Text>
            </View>

            <View style={styles.child}>
            <Text style={styles.text}>Your Blob Profile</Text>
            <Text></Text>
            <Button text={"Player Profile"} onPress={goToPlayerPage}></Button>
            </View>
        </View>
    );

    async function goToPlayerPage() {
        navigation.navigate('Player Profile')
    }

}

export default PlayerProfilePage;