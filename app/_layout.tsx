import { Stack, Tabs } from 'expo-router';
export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: 'index',
  };
export default function Layout() {
    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index"/>
            <Stack.Screen name="about"/>

        </Stack>
    )
}