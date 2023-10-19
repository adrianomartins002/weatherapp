import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import Button from "./src/components/Button/Button";
import TextInputBase from "./src/components/Input/Input";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import UserLocation from "./src/services/UserLocation";

export default function App() {
  const [name, nameChange] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let textLat = "Waiting..";
  let textLong = "Waiting..";
  if (errorMsg) {
    textLat = errorMsg;
    textLong = errorMsg;
  } else if (location) {
    textLat = location.coords.latitude;
    textLong = location.coords.longitude;
  }

  async function saveUser() {
    console.warn("tete");
    setLoading(true)
    const response = await UserLocation.createUserLocation(
      name,
      textLat,
      textLong
    );
    setLoading(false);
    if (response) {
      
      setSuccess(true)
      setTimeout(() => setSuccess(false), 2000);
    } else {
      setShowSuccess(false);
    }
    
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ padding: 4 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>latitude: </Text>
          <Text>{textLat}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>longitude: </Text>
          <Text>{textLong}</Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Send you current location to get the weather
      </Text>
      <TextInputBase onTextChange={nameChange} textValue={name} />
      <Button onPress={saveUser} loading={loading} success={success}></Button>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 200,
  },
});
