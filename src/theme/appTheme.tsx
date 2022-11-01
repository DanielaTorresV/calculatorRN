import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
      flex: 1,
      backgroundColor: 'black',
      paddingHorizontal: 20
    },
    calculatorContainer: {
      flex: 1,
      justifyContent: 'flex-end'
    },
    result: {
      color: 'white',
      fontSize: 60,
      textAlign: 'right',
      marginBottom: 10
    },
    resultSmall: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: 30,
      textAlign: 'right'
    },
    rowButtons: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 18,
      paddingHorizontal: 10
    },
    button: {
      height: 80,
      borderRadius: 100,
      justifyContent: 'center',
      marginHorizontal: 10
    },
    buttonText: {
      fontWeight: '300',
      fontSize: 30,
      padding: 10,
      textAlign: 'center'
    }
});