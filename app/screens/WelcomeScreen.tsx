import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Keypad from "../components/Keypad";
import colors from "../config/colors";
import { units } from "../config/conversions";
import { Mode, Params } from "../../types";

type Props = NativeStackScreenProps<Params, "Welcome">;
const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const { getItem, setItem } = useAsyncStorage("mode");
  const [mode, setMode] = useState<Mode>("dark");

  const writeItemToStorage = async (newValue: Mode): Promise<void> => {
    if (newValue) {
      await setItem(newValue);
      setMode(newValue);
    }
  };

  const readItemFromStorage = async (): Promise<void> => {
    const item = await getItem();
    const newMode = item || "dark";
    setMode(newMode as Mode);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const keys: string[] = [
    ...Object.keys(units),
    mode || "dark",
    "",
    "",
    "about",
  ];

  const handleTouch = (keyPress: string) => {
    if (!keyPress) return;
    if (keyPress === mode)
      writeItemToStorage(mode === "light" ? "dark" : "light");
    else if (keyPress === "about") navigation.navigate(`About`, { mode: mode });
    else navigation.navigate(`Convert`, { conversion: keyPress, mode: mode });
  };

  return (
    <View style={{ backgroundColor: colors.background[mode], flex: 1 }}>
      <View style={[styles.top]}>
        <Text style={[styles.nameText, { color: colors.textMode[mode] }]}>
          ConverTron 5000
        </Text>
        <Icon
          name={"compare-arrows"}
          size={120}
          color={colors.textMode[mode]}
        />
      </View>
      <View style={styles.keypadOuter}>
        <Keypad
          mode={mode}
          conversion={"temp"}
          keys={keys}
          handleTouch={handleTouch}
          forHomeScreen
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 1,
    marginTop: 30,
    padding: "20%",
  },
  nameText: {
    alignSelf: "center",
    fontSize: 30,
    textAlign: "center",
    marginBottom: "10%",
  },
  keypadOuter: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 40,
  },
});

export default WelcomeScreen;
