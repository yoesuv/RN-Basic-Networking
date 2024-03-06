import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { THEME_COLOR } from "./data/colors";
import DetailPlaceScreen from "./screens/detail-place";
import ListPlaceScreen from "./screens/list-place";
import { RootStackParamList } from "./screens/root-stack-params";
import SplashScreen from "./screens/splash";

const Stack = createNativeStackNavigator<RootStackParamList>();
const baseOptions: NativeStackNavigationOptions = {
  title: "Basic Networking",
  headerStyle: {
    backgroundColor: THEME_COLOR,
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  statusBarColor: THEME_COLOR,
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListPlace"
          component={ListPlaceScreen}
          options={{ ...baseOptions, title: "List Place" }}
        />
        <Stack.Screen
          name="DetailPlace"
          component={DetailPlaceScreen}
          options={{ ...baseOptions, title: "Detail Place" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
