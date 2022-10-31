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
      textAlign: 'right'
    },
    resultSmall: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: 30,
      textAlign: 'right'
    },
    button: {
      height: 80,
      width: 80,
      backgroundColor: '#9B9B9B',
      borderRadius: 100,
      justifyContent: 'center'
    },
    buttonText: {
      color: 'black',
      fontWeight: '300',
      fontSize: 30,
      padding: 10,
      textAlign: 'center'
    }
});