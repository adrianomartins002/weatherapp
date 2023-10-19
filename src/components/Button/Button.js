import { TouchableHighlight } from "react-native";
import { View, Text } from "react-native";

export default function Button({ onPress, loading, success }) {
  return (
    <TouchableHighlight onPress={!loading ? onPress : () => {}}>
      {loading ? (
        <View
          style={{
            width: 200,
            height: 40,
            backgroundColor: "#A9AEAA",
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#454343",
            }}
          >
            Loading
          </Text>
        </View>
      ) : success ? (
        <View
          style={{
            width: 200,
            height: 40,
            backgroundColor: "#49E56A",
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#FFF",
            }}
          >
            Success!
          </Text>
        </View>
      ) : (
        <View
          style={{
            width: 200,
            height: 40,
            backgroundColor: "#1a81d6",
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#FFF",
            }}
          >
            Send current weather
          </Text>
        </View>
      )}
    </TouchableHighlight>
  );
}
