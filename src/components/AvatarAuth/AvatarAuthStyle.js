import { StyleSheet } from "react-native";
import { accentColor, backgroundColor, backgroundTextColor } from "../../assets/colors/colors";

export const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: -60,
        width: 120,
        height: 120,
        borderRadius: 16,
        // display: 'flex',
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        backgroundColor: backgroundTextColor,
    },
    wrapperSvg: {
        position: 'absolute',
        backgroundColor: backgroundColor,
        right: -12,
        bottom: 12,
        width: 25,
        borderRadius: '50%'
    },
    svgAdd: {
        color: accentColor,
    },
});
