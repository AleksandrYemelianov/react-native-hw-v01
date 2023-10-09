import { StyleSheet } from "react-native";
import { accentColor, accentLinkTextColor, backgroundColor, backgroundTextColor, borderInputColor, iconFillColor, primaryTextColor } from "../../assets/colors/colors";

export const styles = StyleSheet.create({
    //   container: {
    //     padding: 32,
    //     height: 490,
    //     backgroundColor: backgroundColor,
    //     alignItems: "center",
    //     borderTopLeftRadius: 25,
    //     borderTopRightRadius: 25,
    //   },
    //   keyboardVisible: {
    //     width: '100%'
    //   },
    //   text: {
    //     marginBottom: 35,
    //     color: primaryTextColor,
    //     fontFamily: 'RobotoMedium',
    //     fontSize: 30,
    //     lineHeight: 35,
    //     letterSpacing: 0.3,
    //   },
    //   keyboardVisible: {
    // width: '100%'
    // },
    createPostInputWrapper: {
        marginBottom: 32,
        gap: 16,
    },
    createPostInput: {
        height: 50,
        paddingVertical: 16,
        color: primaryTextColor,
        borderBottomWidth: 1,
        borderColor: borderInputColor,
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        lineHeight: 18,
    },
    createPostInputLocation: {
        paddingLeft: 28,
    },
    inputOnFocus: {
        borderColor: accentColor,
    },
    createPostInfoIcon: {
        position: 'absolute',
        top: 13,
        color: iconFillColor,
    },
    createPostLocation: {
        position: 'relative',
    },
});
