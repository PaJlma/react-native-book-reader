import { FC } from "react";
import { DropDownProps } from "./DropDown.types";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ArrowDownSVG from "@/app-assets/svg/arrow-down.svg";
import ArrowUpSVG from "@/app-assets/svg/arrow-up.svg";

const styles = StyleSheet.create({
  label: {
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
});

const DropDown: FC<DropDownProps> = ({ title, icon, active, children, ...props }) => {
  return (
    <Pressable {...props}>
      <View style={styles.label}>
        <View style={styles.group}>
          {icon}
          <Text style={styles.text}>{title}</Text>
        </View>
        {active ? <ArrowUpSVG width={25} height={25} /> : <ArrowDownSVG width={25} height={25} />}
      </View>
      <View>{active && children}</View>
    </Pressable>
  );
};

export default DropDown;
