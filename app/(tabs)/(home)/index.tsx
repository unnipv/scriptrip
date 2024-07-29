import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>scriptrip.</Text>
      <Text>anxiety levels low.</Text>
      <Link
        href = {{
          pathname: "/trips/[trip]",
          params: { trip: "b2bk" }
        }}>
        bang to bangkok
      </Link>

      <Link
        href = {{
          pathname: "/trips/[trip]",
          params: { trip: "tbls" }
        }}>
        tblissi
      </Link>
      
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
