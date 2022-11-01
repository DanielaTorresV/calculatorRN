import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {

  const { num, numPrevius, clean,
          posNeg, btnDel, btnSplit,
          doNum, btnMultiply, btnSubtract,
          btnAdd, calculation } = useCalculator();

  return (
    <View style={ styles.calculatorContainer } >
      {
        (numPrevius !== '0') && (
          <Text style={ styles.resultSmall} >{ numPrevius }</Text>
        )
      }      
      <Text 
        style={ styles.result}
        numberOfLines= { 1 }
        adjustsFontSizeToFit      
      >
        { num }
      </Text>

      <View style={ styles.rowButtons } >
        <ButtonCalc 
          text='C' color='#9B9B9B' action={clean}
        />
        <ButtonCalc 
          text='+/-' color='#9B9B9B' action={posNeg}
        />
        <ButtonCalc 
          text='del' color='#9B9B9B' action={btnDel}
        />
        <ButtonCalc 
          text='/' color='#FF9427' action={btnSplit}
        />
      </View>

      <View style={ styles.rowButtons } >
        <ButtonCalc text='7' action={ doNum } />
        <ButtonCalc text='8' action={ doNum } />
        <ButtonCalc text='9' action={ doNum } />
        <ButtonCalc 
          text='x' color='#FF9427' action={btnMultiply}
        />
      </View>

      <View style={ styles.rowButtons } >
        <ButtonCalc text='4' action={ doNum } />
        <ButtonCalc text='5' action={ doNum } />
        <ButtonCalc text='6' action={ doNum } />
        <ButtonCalc 
          text='-' color='#FF9427' action={btnSubtract}
        />
      </View>

      <View style={ styles.rowButtons } >
        <ButtonCalc text='1' action={ doNum } />
        <ButtonCalc text='2' action={ doNum } />
        <ButtonCalc text='3' action={ doNum } />
        <ButtonCalc 
          text='+' color='#FF9427' action={btnAdd}
        />
      </View>

      <View style={ styles.rowButtons } >
        <ButtonCalc text='0' ancho action={ doNum } />
        <ButtonCalc text='.' action={ doNum } />
        <ButtonCalc 
          text='=' color='#FF9427' action={calculation}
        />
      </View>      

    </View>
  )
}

export default CalculatorScreen;
