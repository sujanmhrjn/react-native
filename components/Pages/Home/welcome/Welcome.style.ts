import { COLORS, FONT, SIZES } from "@/constants/themes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        paddingVertical: 20,
        backgroundColor: COLORS.light.background
    },
    userName:{
        fontFamily:FONT.regular,
        fontSize: SIZES.large,
        color: COLORS.light.text
    },
    welcomeMessage:{
        fontWeight:'500',
        fontSize: SIZES.large,
        color:COLORS.light.tint,
        marginTop:2
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.large,
        height: 50,
      },

      searchWrapper: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.small,
        height: "100%",
      },
      searchInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
      },
      searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: '#ef6e6e',
        borderRadius: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
      },
      tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
      },
      
})

export const tab =  (activeJobType: string, item: string) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? '#ef6e6e' : '#f6f6f6',
  });
  
export const tabText =  (activeJobType: string, item: string) => ({
    color: activeJobType === item ? '#ef6e6e' : "#999",
  })
export default styles;