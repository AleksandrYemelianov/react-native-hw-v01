import { StyleSheet } from "react-native";
import { iconFillColor, primaryTextColor } from "../../../assets/colors/colors";

export const styles = StyleSheet.create({
    header: {
        borderBottomColor: iconFillColor,
    },
    title: {
        color: primaryTextColor,
        fontFamily: 'RobotoMedium',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408,
    },
    wrapperSvg: {
        paddingHorizontal: 16,
    },
    svgLogout: {
        color: iconFillColor,
    },
});