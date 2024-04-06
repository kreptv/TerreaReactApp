import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from "../../UIComponents/Input";
import Button from "../../UIComponents/Button";
import styles from "../../UIComponents/Styles";

const ForumsMenuPage= ({navigation}) => {

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>Forums</Text>
            </View>

            <View style={styles.child}>
            <Text></Text>
            <Button text={"Go to Forum Post"} onPress={goToPost}></Button>
            </View>
        </View>
    );

    async function goToPost() {
        navigation.navigate('Forums Post')
    }

}

export default ForumsMenuPage;