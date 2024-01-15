import { FC } from "react";
import { DefaultLayoutProps } from "./DefaultLayout.types";
import { StyleSheet, View } from "react-native";
import Footer from "@/components/ui/Footer/Footer";

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <View style={styles.body}>
      {children}
      <Footer />
    </View>
  );
};

export default DefaultLayout;
