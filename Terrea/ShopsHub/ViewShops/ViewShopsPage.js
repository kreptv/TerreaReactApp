import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from "../../UIComponents/Input";
import Button from "../../UIComponents/Button";
import styles from "../../UIComponents/Styles";

const ViewShopsPage= ({navigation}) => {

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>View Shops</Text>
            </View>

            <View style={styles.child}>
            <Text></Text>
            <Button text={"Voucher Shop"} onPress={goToVoucherShopPage}></Button>
            <Button text={"Evo Grounds"} onPress={goToEvoGroundsPage}></Button>
            <Button text={"Bleeding Grounds"} onPress={goToBleedingGroundsPage}></Button>

            <Button text={"Blob Shop"} onPress={goToBlobShopPage}></Button>
            <Button text={"Blob Trade"} onPress={goToBlobTradePage}></Button>
            </View>
        </View>
    );

    async function goToVoucherShopPage() {
        navigation.navigate('Voucher Shop')
    }

    async function goToBleedingGroundsPage() {
        navigation.navigate('Bleeding Grounds')
    }

    async function goToEvoGroundsPage() {
        navigation.navigate('Evo Grounds')
    }

    async function goToBlobShopPage() {
        navigation.navigate('Blob Shop')
    }

    async function goToBlobTradePage() {
        navigation.navigate('Blob Trading')
    }

}

export default ViewShopsPage;