import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function TripScreen() {
  const params = useLocalSearchParams();
  
  return (
    <View style={styles.container} >
      <Stack.Screen options={{ title: params.trip}} />
      <Text>Details of {trip}</Text>
      <Link href="/">go back home.</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
