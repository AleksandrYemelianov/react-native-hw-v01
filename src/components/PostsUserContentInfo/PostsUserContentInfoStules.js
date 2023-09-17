import { StyleSheet } from "react-native";
import { iconFillColor, primaryTextColor } from "../../assets/colors/colors";

export const styles = StyleSheet.create({
    postInfoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    postComment: {
        display: 'flex',
        flexDirection: 'row',
    },
    postInfoIcon: {
        color: iconFillColor,
    },
    postCommentText: {
        marginLeft: 6,
        color: iconFillColor,
        fontFamily: 'RobotoRegular',
        fontSize: 16,
    },
    postLocation: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    postLocationText: {
        marginLeft: 6,
        color: primaryTextColor,
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});
