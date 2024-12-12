import { SIZES } from "@/constants/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.xLarge,
      },
      header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      headerTitle: {
        fontSize: SIZES.large,
        color: '#666'
      },
      headerBtn: {
        fontSize: SIZES.medium,
        color: '#666'
      },
      cardsContainer: {
        marginTop: SIZES.medium,
      },
})