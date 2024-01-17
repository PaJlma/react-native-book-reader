import { FC } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { FooterButtonProps } from "./FooterButton.types";

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    padding: 5,
  },

  text: {
    fontSize: 10,
  },
});

const FooterButton: FC<FooterButtonProps> = ({ text, icon, activeIcon, isActive, ...props }) => {
  return (
    <Pressable style={styles.body} {...props}>
      {isActive ? activeIcon : icon}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default FooterButton;
