import {useFonts, Quicksand_400Regular, Quicksand_600SemiBold} from '@expo-google-fonts/quicksand';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {app, db} from "./InitializeFirebase";

import LogInPage from "./Terrea/LogInHub/LogInRegister/LogInPage";
import RegisterPage from "./Terrea/LogInHub/LogInRegister/RegisterPage";
import ConfirmEmailPage from "./Terrea/LogInHub/LogInRegister/ConfirmEmailPage";
import UserProfilePage from "./Terrea/LogInHub/UserProfile/UserProfilePage";
import PlayerProfilePage from "./Terrea/ProfileHub/PlayerProfile/PlayerProfilePage";
import BlobProfilePage from "./Terrea/ProfileHub/BlobProfile/BlobProfilePage";

import HomePage from "./Terrea/HomeHub/Home/HomePage";
import DeityAnnouncementsPage from "./Terrea/HomeHub/Home/DeityAnnouncementsPage";
import MonthlyPromptsPage from "./Terrea/HomeHub/MonthlyPrompts/MonthlyPromptsPage";
import DailyThreadPage from "./Terrea/HomeHub/DailyThread/DailyThreadPage";

import ForumsMenuPage from "./Terrea/ForumsHub/Forums/ForumsMenuPage";
import ForumsPostPage from "./Terrea/ForumsHub/Forums/ForumsPostPage";

import ViewShopsPage from "./Terrea/ShopsHub/ViewShops/ViewShopsPage";
import VoucherShopPage from "./Terrea/ShopsHub/VoucherShop/VoucherShopPage";
import EvoGroundsPage from "./Terrea/ShopsHub/EvoGrounds/EvoGroundsPage";
import BleedingGroundsPage from "./Terrea/ShopsHub/BleedingGrounds/BleedingGroundsPage";
import BlobShopPage from "./Terrea/ShopsHub/BlobShop/BlobShopPage";
import BlobTradePage from "./Terrea/ShopsHub/BlobTrade/BlobTradePage";


const Stack = createNativeStackNavigator();

export default function App() {

      //const app = initializeApp(firebaseConfig);
      //const db = getFirestore(app);

    /*let [fontsLoaded, fontError] = useFonts({
        Quicksand_400Regular, Quicksand_600SemiBold
    });

    if (!fontsLoaded) return null;*/

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Log in or Register" component={LogInRegisterBottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Confirm Email" component={ConfirmEmailPage} options={{ headerShown: false }} />
                <Stack.Screen name="Terrea Home" component={TerreaBottomTabNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );

    function TerreaBottomTabNavigator({ navigation }) {
        const Tab = createBottomTabNavigator();
        return (
            <Tab.Navigator screenOptions={{headerShown: false }}>
                <Tab.Screen name="Home Hub" component={HomePageStackNavigator} />
                <Tab.Screen name="Profile Hub" component={PlayerProfilePageStackNavigator} />
                <Tab.Screen name="Forums Hub" component={ForumsPageStackNavigator} />
                <Tab.Screen name="Shops Hub" component={ShopsStackNavigator} />
            </Tab.Navigator>
        );
    }

    function LogInRegisterBottomTabNavigator({ navigation }) {
        const Tab = createBottomTabNavigator();
        return (
            <Tab.Navigator screenOptions={{headerShown: false }}>
                <Tab.Screen name="Log In" component={LogInPage} />
                <Tab.Screen name="Register" component={RegisterPage} />
            </Tab.Navigator>
        );
    }

    function HomePageStackNavigator({ navigation }) {
        const Stack = createNativeStackNavigator();
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="User Profile" component={UserProfilePage} />
                <Stack.Screen name="Deity Announcements" component={DeityAnnouncementsPage} />
                <Stack.Screen name="Monthly Prompt" component={MonthlyPromptsPage} />
                <Stack.Screen name="Daily Thread" component={DailyThreadPage} />
            </Stack.Navigator>
        );
    }

    function PlayerProfilePageStackNavigator({ navigation }) {
        const Stack = createNativeStackNavigator();
        return (
            <Stack.Navigator>
                <Stack.Screen name="Player Profile" component={PlayerProfilePage} />
                <Stack.Screen name="Blob Profile" component={BlobProfilePage} />
            </Stack.Navigator>
        );
    }

    function ForumsPageStackNavigator({ navigation }) {
        const Stack = createNativeStackNavigator();
        return (
            <Stack.Navigator>
                <Stack.Screen name="Forums Menu" component={ForumsMenuPage} />
                <Stack.Screen name="Forums Post" component={ForumsPostPage} />
            </Stack.Navigator>
        );
    }

    function ShopsStackNavigator({ navigation }) {
        const Stack = createNativeStackNavigator();
        return (
            <Stack.Navigator>
                <Stack.Screen name="View Shops" component={ViewShopsPage} />
                <Stack.Screen name="Voucher Shop" component={VoucherShopPage} />
                <Stack.Screen name="Evo Grounds" component={EvoGroundsPage} />
                <Stack.Screen name="Bleeding Grounds" component={BleedingGroundsPage} />
                <Stack.Screen name="Blob Shop" component={BlobShopPage} />
                <Stack.Screen name="Blob Trading" component={BlobTradePage} />
            </Stack.Navigator>
        );
    }




}

