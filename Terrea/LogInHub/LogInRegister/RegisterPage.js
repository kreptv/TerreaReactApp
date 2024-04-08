import React, {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import Input from "../../UIComponents/Input";
import Button from "../../UIComponents/Button";
import styles from "../../UIComponents/Styles";
import { firebaseConfig } from '../../../firebaseConfig';
import { getFirestore, collection, getDocs, setDoc, doc, addDoc, getDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app, db} from "../../../InitializeFirebase";

function RegisterPage({navigation}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    async function validateAndRegister() {


        const db = getFirestore(app);
        // check that all values are defined
        if (!name || !email || !password || !confirm) return alert("Fields cannot be blank.");

        // check that passwords match
        if (password !== confirm) return alert("Passwords must match!");

        // check that password is at least 6 letters long
        if (password.length < 6) return alert("Password must be at least 6 characters long!");

        // check that username is not already in db


        const docRef = doc(db, "users", name);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return alert("Username already in use! Please choose another.");
        } else {
            console.log("Username clear!");
        }

        // check that username is not already in database


        const auth = getAuth();
          createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {

                try {
                    const userDoc = doc(db, "users", name)
                    const docRef = await setDoc(userDoc, {
                      username: name,
                      email: email,
                      admin: false
                    });
                    //console.log("Document written with ID: ", docRef.username);
                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }

            navigation.navigate('Confirm Email')

              const user = userCredential.user;
              //onChangeLoggedInUser(user.email);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage);
            });
    }

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>Terrea</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>Register</Text>
                <Input placeholder={"Name"} setValue={setName} value={name}/>
                <Input placeholder={"Email"} setValue={setEmail} value={email}/>

                <Input placeholder={"Password"} setValue={setPassword} value={password} secure={true}/>
                <Input placeholder={"Confirm Password"} setValue={setConfirm} value={confirm} secure={true}/>
                <Button text={"Register"} onPress={validateAndRegister}/>
            </View>
        </View>
    );
}

export default RegisterPage;