import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const IconText = ({ iconName, iconColor, bodyText, bodyTextStyles }) => {
  const { container, textTheme } = styles;

  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textTheme: {
    fontWeight: "bold",
  },
});

export default IconText;
