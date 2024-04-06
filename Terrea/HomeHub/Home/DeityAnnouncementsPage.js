import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from "../../UIComponents/Input";
import Button from "../../UIComponents/Button";
import styles from "../../UIComponents/Styles";

const DeityAnnouncementsPage= ({navigation}) => {

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>Deity Announcements</Text>
            </View>

            <View style={styles.child}>
            <Text style={styles.text}>Ichor says "eat your veggies"</Text>
            <Text></Text>
            <Button text={"Home"} onPress={goHome}></Button>
            </View>
        </View>
    );

    async function goHome() {
        navigation.navigate('Home')
    }

}

export default DeityAnnouncementsPage;