import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Screens/SplashScreen";
import HomeScreen from "../Screens/HomeScreen";
import IntroScreen from "../Screens/IntroScreen";

const Routes = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="splash"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="intro" component={IntroScreen} />
        </Stack.Navigator>
    )
};


export default Routes;