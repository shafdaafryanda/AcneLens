import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Swipe-back dimatikan: loading tidak boleh dibatalkan, hasil tidak kembali ke loading */}
        <Stack.Screen name="indexloading" options={{ gestureEnabled: false }} />
        <Stack.Screen name="indexresult" options={{ gestureEnabled: false }} />
      </Stack>
    </>
  );
}
