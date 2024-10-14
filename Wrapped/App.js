import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from './Splash & Login Screen/splash'; // Vérifiez bien le chemin
import Splash2 from './Splash & Login Screen/splash2';
import LoginP1 from './Splash & Login Screen/LoginP1';
import AcountDet from './Splash & Login Screen/AcountDet';
import LoginWEmail from './Splash & Login Screen/LoginWEmail';
import SignIn from './Splash & Login Screen/SignIn';
import ForgetPassword from './Splash & Login Screen/ForgetPass';
import NPassword from './Splash & Login Screen/Npaswword';
import ProfilePage from './Profile/ProfilePage/ProfilePage';
import UpdatePage from './Profile/UpdateProfile/UpdatePage';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="ProfilePage">
        {/* <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash} />
        <Stack.Screen name="Splash2" options={{ headerShown: false }} component={Splash2} />
        <Stack.Screen name="LoginP1" options={{ headerShown: false }} component={LoginP1} />
        <Stack.Screen name="AcountDet" options={{ headerShown: false }} component={AcountDet} />
        <Stack.Screen name="LoginWEmail" options={{ headerShown: false }} component={LoginWEmail}/>
        <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SignIn}/>
        <Stack.Screen name="ForgetPassword" options={{ headerShown: false }} component={ForgetPassword}/>
        <Stack.Screen name="NPassword" options={{ headerShown: false }} component={NPassword}/> */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
        {/* <Stack.Screen name="ProfilePage" options={{ headerShown: false }} component={ProfilePage}/> */}
        <Stack.Screen name="UpdatePage" options={{ headerShown: false }} component={UpdatePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
