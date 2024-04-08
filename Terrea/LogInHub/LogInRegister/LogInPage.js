import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from "../../UIComponents/Input";
import Button from "../../UIComponents/Button";
import styles from "../../UIComponents/Styles";
import WebAlert from "../../UIComponents/WebAlert";
import AwesomeAlert from 'react-native-awesome-alerts';
import { getFirestore, collection, query, addDoc, where, getDocs } from 'firebase/firestore/lite';

import { firebaseConfig } from '../../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {app, db} from "../../../InitializeFirebase";

const LogInPage= ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function validateAndAuthenticate() {
        // check that all values are defined
        
        if (!email) return alert("Email cannot be blank.");
        if (!password) return alert("Password cannot be blank.");

        // everything is good, try to authenticate the user
        // TODO: make request to backend to validate user
            const auth = getAuth();

            signInWithEmailAndPassword(auth, email, password)
              .then(async (userCredential) => {
                // Signed in
                navigation.navigate('Terrea Home')
                const user = userCredential.user;
                //onChangeLoggedInUser(user.email);

              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                return alert(errorMessage);
              });



    }

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>Terrea</Text>
            </View>

            <View style={styles.child}>
            <Text style={styles.text}>Log In</Text>
            <Input placeholder={"Email"} setValue={(text) => setEmail(text)} value={email}/>
            <Input placeholder={"Password"} setValue={(text) => setPassword(text)} value={password} secure={true}/>
            <Button text={"Sign In"} onPress={validateAndAuthenticate} ></Button>
            </View>
        </View>
    );
}

export default LogInPage;