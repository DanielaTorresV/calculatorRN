import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';

const CalculatorScreen = () => {

  const [numPrevius, setNumPrevius] = useState('0');
  const [num, setNum] = useState('100');

  const clean = () => {
    setNum('0');
  }

  const doNum = ( textNum: string ) => {

    // No aceptar doble punto
    if( num.includes('.') && textNum === '.' ) return;

    // empieza con cero
    if ( num.startsWith('0') || num.startsWith('-0') ){
      // Punto decimal
      if ( textNum === '.' ){
        setNum(num + textNum);

         //evaluar si es otro cero y hay un punto
      } else if ( textNum === '0' && num.includes('.') ) {
        setNum(num + textNum);

        //evaluar si es diferente de cero y no hay punto
      } else if ( textNum !== '0' && !num.includes('.') ) {
        setNum(textNum);

        //evaluar condicion de no poner 00000.0000
      } else if ( textNum === '0' && !num.includes('.') ) {
        setNum(num);
      } else {
        setNum(num + textNum);
      }    
    } else {
      setNum(num + textNum);
    }
  }

  const posNeg = () => {
    if ( num.includes('-') ) {
      setNum( num.replace('-',''))
    } else {
      setNum( ('-') + num )
    }
  }

  return (
    <View style={ styles.calculatorContainer } >
      <Text style={ styles.resultSmall} >{ numPrevius }</Text>
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
          text='del' color='#9B9B9B' action={clean}
        />
        <ButtonCalc 
          text='/' color='#FF9427' action={clean}
        />
      </View>

      <View style={ styles.rowButtons } >
        <ButtonCalc text='7' action={ doNum } />
        <ButtonCalc text='8' action={ doNum } />
        <ButtonCalc text='9' action={ doNum } />
        <ButtonCalc 
          text='x' color='#FF9427' action={clean}
        />
      </View>

      <View style={ styles.rowButtons } >
        <ButtonCalc text='4' action={ doNum } />
        <ButtonCalc text='5' action={ doNum } />
        <ButtonCalc text='6' action={ doNum } />
        <ButtonCalc 
          text='-' color='#FF9427' action={clean}
        />
      </View>

      <View style={ styles.rowButtons } >
        <ButtonCalc text='1' action={ doNum } />
        <ButtonCalc text='2' action={ doNum } />
        <ButtonCalc text='3' action={ doNum } />
        <ButtonCalc 
          text='+' color='#FF9427' action={clean}
        />
      </View>

      <View style={ styles.rowButtons } >
        <ButtonCalc text='0' ancho action={ doNum } />
        <ButtonCalc text='.' action={ doNum } />
        <ButtonCalc 
          text='=' color='#FF9427' action={clean}
        />
      </View>      

    </View>
  )
}

export default CalculatorScreen;
