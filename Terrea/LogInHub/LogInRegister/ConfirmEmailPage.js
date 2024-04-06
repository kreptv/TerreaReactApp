import {Text, View} from "react-native";
import Input from "../../UIComponents/Input";
import Button from "../../UIComponents/Button";
import styles from "../../UIComponents/Styles";

const ConfirmEmailPage = ({ navigation }) => {
    return (
        <View style={styles.centeredContainer}>
            <View style={styles.child}>
                <Text style={styles.centeredHeadline}>Please verify your email to sign in.</Text>

                <Text style={styles.centeredText}>
                    Click on the link in your email to create your account.
                </Text>

                <Button text={"Log in"} onPress={() => navigation.navigate('Log In')}></Button>
            </View>
        </View>
    );
}

export default ConfirmEmailPage;