import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from "../../UIComponents/Input";
import Button from "../../UIComponents/Button";
import styles from "../../UIComponents/Styles";

const BlobShopPage= ({navigation}) => {

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>Blob Shopping</Text>
            </View>

            <View style={styles.child}>
            <Text style={styles.text}>Shop</Text>
            <Text></Text>
            <Button text={"View shops"} onPress={goToViewShopsPage}></Button>
            </View>
        </View>
    );

    async function goToViewShopsPage() {
        navigation.navigate('View Shops')
    }

}

export default BlobShopPage;