import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

//rn paper
import { Provider as PaperProvider } from "react-native-paper";

//easy grids
import { Col, Row, Grid } from "react-native-easy-grid";

//icons
import { FontAwesome } from "@expo/vector-icons";

//Paper Components
import { Avatar, TextInput, Button, Snackbar, Divider } from "react-native-paper";

//ES6
const App = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);


  //snackbar helper functions
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Grid
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 50,
            marginBottom: 50,
          }}
        >
          <Row>
            <Col size={20}>
              <FontAwesome name="user-circle" size={40} color="#87ceeb" />
            </Col>
            <Col size={80}>
              <Text style={styles.heading}>Account Detail</Text>
            </Col>
          </Row>
        </Grid>
        {/* avatar */}
        <View style={styles.avatarContainer}>
          <TouchableOpacity>
            <Avatar.Image
              size={200}
              source={require("./assets/images/Ellipse.png")}
            />
          </TouchableOpacity>
          <Text style={styles.user}> Sand Hanitizer </Text>
        </View>
        {/* Text Input */}
        <View>
          <TextInput
            label="Username"
            value={text}
            onChangeText={(text) => setText(text)}
            underlineColor="transparent"
            placeholder="Tim Williams"
            selectionColor="#87ceeb"
            style={styles.input}
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            underlineColor="transparent"
            placeholder="timwilliams@gmail.com"
            selectionColor="#87ceeb"
            style={styles.input}
          />
          <Button
            //icon="camera"
            mode="contained"
            color="#87ceeb"
            onPress={onToggleSnackBar}
            style={styles.button1}
          >
            Save Changes
          </Button>
          <Snackbar
            visible={visible}
            duration={2500} //miliseconds
            onDismiss={onDismissSnackBar}
            action={{
              label: "yeet",
              onPress: () => {
                // Do something
              },
            }}
            style={styles.snack}
          >
            Can you like not press me?
          </Snackbar>
        </View>
        <Divider style={{ padding: 2, marginTop: 5 }} />
        <View>
          <Text style={styles.user}>Deactivate Account</Text>
          <Text style={{textAlign: 'center'}}>Delete your account and all account data</Text>
          <Button
            //icon="camera"
            mode="contained"
            color="red"
            onPress={() => console.log('aight')}
            style={[styles.button1, {width: 150, alignSelf: 'center', borderRadius: 50}]}
          >
            Deactivate
          </Button>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 40,
    marginTop: 10,
  },
  heading: {
    fontSize: 25,
  },
  avatarContainer: {
    alignSelf: "center",
    padding: 10,
    marginBottom: 20,
  },
  user: {
    fontSize: 25,
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
    marginTop: 5,
  },
  input: {
    height: 60,
    margin: 5,
  },
  button1: {
    margin: 5,
  },
  snack: {
    //marginTop: 100,
    position: 'absolute',
    backgroundColor: "#2F4F4F",
  }
});

export default App;
