import { FC } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { NavButtonProps } from "./NavButton.types";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "@/types/navigation.types";

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#fff",
  },

  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  text: {
    fontSize: 16,
  },

  cancelButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: "#afa",
  },
});

const NavButton: FC<NavButtonProps> = ({ children, icon, navigation, ...props }) => {
  const { navigate } = useNavigation<AppNavigationProp>();

  return (
    <Pressable style={styles.body} onPress={() => navigate(navigation.screen, navigation.params)} {...props}>
      <View style={styles.group}>
        {icon}
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default NavButton;
