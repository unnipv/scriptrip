import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function TripScreen() {
  const router = useRouter();
  // const { trip } = useLocalSearchParams();
  const params = useLocalSearchParams();
  
  return (
    <View style={styles.container} >
      <Stack.Screen options={{ title: params.trip}} />
      <Text>Details of {params.trip}</Text>
      <Text
        onPress={() => {
          router.setParams({ trip: 'kasol' })
        }}>
          change trip to kasol
        </Text>
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
