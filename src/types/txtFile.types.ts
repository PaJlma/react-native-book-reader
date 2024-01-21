import { DocumentPickerAsset } from "expo-document-picker";

export interface TxtFile extends DocumentPickerAsset {
  bookmarked: boolean;
  read: {
    scrolled: number;
    percents: number;
  };
}
