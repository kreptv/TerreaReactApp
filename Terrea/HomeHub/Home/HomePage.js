import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from "../../UIComponents/Input";
import Button from "../../UIComponents/Button";
import styles from "../../UIComponents/Styles";

const HomePage= ({navigation}) => {

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>Terrea</Text>
            </View>

            <View style={styles.child}>
            <Text style={styles.centeredText}>Welcome to Terrea!</Text>
            <Text></Text>
            <Button text={"User Settings"} onPress={goToUserProfile}></Button>
            <Button text={"Deity Announcements"} onPress={goToDeityAnnouncements}></Button>
            <Button text={"Daily Thread"} onPress={goToDailyThread}></Button>
            </View>
        </View>
    );

    async function goToDeityAnnouncements() {
        navigation.navigate('Deity Announcements')
    }

    async function goToDailyThread() {
        navigation.navigate('Daily Thread')
    }

    async function goToUserProfile() {
        navigation.navigate('User Profile')
    }

}

export default HomePage;