import { StyleSheet } from "react-native";
import { accentColor, accentLinkTextColor, backgroundColor, backgroundTextColor, borderInputColor, primaryTextColor } from "../../assets/colors/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 32,
    height: 490,
    backgroundColor: backgroundColor,
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  keyboardVisible: {
    width: '100%'
  },
  text: {
    marginBottom: 35,
    color: primaryTextColor,
    fontFamily: 'RobotoMedium',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
  },
  wrapperInput: {
    width: '100%',
    marginBottom: 40,
    gap: 16,

  },
  input: {
    height: 50,
    padding: 16,
    backgroundColor: backgroundTextColor,
    color: primaryTextColor,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: borderInputColor,
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    lineHeight: 18,
  },
  inputOnFocus: {
    borderColor: accentColor,
  },
  inputRelative: {
    position: 'relative',
  },
  textAuth: {
    color: accentLinkTextColor,
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    lineHeight: 18,
  },
  textAuthAccent: {
    textDecorationLine: 'underline',
  },
});
