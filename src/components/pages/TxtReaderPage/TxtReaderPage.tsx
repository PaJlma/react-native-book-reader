import { FC, createRef, useEffect, useState } from "react";
import { TxtReaderPageProps } from "./TxtReaderPage.types";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View } from "react-native";
import * as FileSystem from "expo-file-system";
import { useRoute } from "@react-navigation/native";
import { AppRouteProp } from "@/types/navigation.types";
import { TxtReaderScreenProps } from "@/components/screens/TxtReaderScreen/TxtReaderScreen.types";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setTxtRead } from "@/store/slices/txtFiles.slice";
import { colors } from "@/constants/colors";

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
  },

  scroll: {
    height: "95%",
  },

  text: {
    fontSize: 16,
    padding: 15,
  },

  footer: {
    backgroundColor: colors.white,
  },

  footer__text: {
    padding: 10,
    textAlign: "center",
    fontSize: 16,
  },
});

const TxtReaderPage: FC<TxtReaderPageProps> = (props) => {
  const { uri } = useRoute<AppRouteProp>().params as TxtReaderScreenProps;
  const dispatch = useAppDispatch();
  const file = useAppSelector((state) => state.txtFiles).find((file) => file.uri === uri);
  const [text, setText] = useState<string>();
  const [scrollViewHeight, setScrollViewHeight] = useState<number>(0);
  const [scrollViewContentHeight, setScrollViewContentHeight] = useState<number>(0);
  const scrollViewRef = createRef<ScrollView>();

  useEffect(() => {
    if (scrollViewContentHeight < scrollViewHeight && file) {
      dispatch(setTxtRead({ uri: file.uri, scrolled: scrollViewContentHeight, percents: 100 }));
    }
  }, [scrollViewContentHeight, scrollViewHeight]);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: file?.read.scrolled });

    (async () => {
      if (!file) {
        return;
      }

      const data = await FileSystem.readAsStringAsync(file.uri);
      setText(data);
    })();
  }, []);

  const onScrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!file) {
      return;
    }

    dispatch(
      setTxtRead({
        uri: file.uri,
        scrolled: event.nativeEvent.contentOffset.y,
        percents: Math.trunc(
          ((event.nativeEvent.contentOffset.y + scrollViewHeight) / event.nativeEvent.contentSize.height) * 100,
        ),
      }),
    );
  };

  return (
    <View>
      <ScrollView
        style={styles.scroll}
        onScroll={onScrollHandler}
        onLayout={(event) => setScrollViewHeight(event.nativeEvent.layout.height)}
        onContentSizeChange={(w, h) => setScrollViewContentHeight(h)}
        ref={scrollViewRef}
      >
        <Text style={styles.text}>{text}</Text>
      </ScrollView>
      {file && (
        <View style={styles.footer}>
          <Text style={styles.footer__text}>{`${file.read.percents}%`}</Text>
        </View>
      )}
    </View>
  );
};

export default TxtReaderPage;
