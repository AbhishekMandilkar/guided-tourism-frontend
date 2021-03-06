import React, { useLayoutEffect, useState, useEffect } from "react";
import { View } from "react-native";

import { auth } from "../utils/firebase/config.js";
import Wrapper from "../common/Wrapper.styled.js";
import BtnPrimary from "../common/BtnPrimary.js";
import StyledText from "../common/Text.styled.js";
import StyledTextInput from "../common/TextInput.styled.js";

const LoginScreen = ({ navigation }) => {
  //hide header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  //sign in user
  const signIn = () => {
    console.log("evoked");
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => console.error(err));
  };

  //states
  const [email, setEmail] = useState("abhishek@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [showVector, setShowVector] = useState(true);
  function handleVectors() {
    setShowVector(false);
  }

  return (
    <Wrapper style={{ flex: 1, alignItems: "center" }}>
      {/* <View style={{ paddingVertical: 80 }}>
          <Image
            source={require("../assets/vectors/LoginScreenVector.jpg")}
            style={{ width: 350, height: 350 }}
          />
        </View>
      */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingVertical: 40,
        }}
      >
        <View
          style={{ padding: 60, textAlign: "center", justifyContent: "center" }}
        >
          <StyledText
            family="Poppins"
            weight="bold"
            style={{ fontSize: 36, textAlign: "center" }}
          >
            Let's sign you in
          </StyledText>
          <StyledText
            family="Poppins"
            style={{
              fontSize: 24,
              textAlign: "center",
              color: "rgba(0,0,0,0.7)",
            }}
          >
            Welcome Back
          </StyledText>
        </View>
        <View style={{ alignItems: "center" }}>
          <StyledText
            family="Poppins"
            style={{ paddingVertical: 10, fontSize: 15 }}
          >
            Don't have an account?
            <StyledText
              weight="bold"
              style={{ marginLeft: 10, textDecorationLine: "underline" }}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </StyledText>
          </StyledText>
          <StyledTextInput
            width={270}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            onPressIn={handleVectors}
          />
          <StyledTextInput
            width={270}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            onFocus={handleVectors}
          />
          <BtnPrimary title="Sign In" handleClick={signIn} width={270} />
        </View>
      </View>
    </Wrapper>
  );
};

export default LoginScreen;
