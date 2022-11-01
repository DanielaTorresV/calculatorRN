import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';

enum Operadores {
  add, subtract, multiply, split
}

const CalculatorScreen = () => {

  const [numPrevius, setNumPrevius] = useState('0');
  const [num, setNum] = useState('100');
  const lastOpe = useRef<Operadores>();

  const clean = () => {
    setNum('0');
    setNumPrevius('0');
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

  const btnDel = () => {

    let neg = '';
    let numTemp = num;
    if ( num.includes('-') ) {
      neg = '-';
      numTemp = num.substr(1);
    }

    if (numTemp.length > 1 ) {
      setNum ( neg + numTemp.slice(0, -1) );
    } else {
      setNum ( '0' );
    }
  }

  const changeNumPrevius = () => {

    if ( num.endsWith('.') ) {
      setNumPrevius(num.slice(0, -1) );
    } else {
      setNumPrevius(num);
    }    
    setNum('0');
  }

  const btnSplit = () => {
    changeNumPrevius();
    lastOpe.current = Operadores.split;
  }

  const btnMultiply = () => {
    changeNumPrevius();
    lastOpe.current = Operadores.multiply;
  }

  const btnSubtract = () => {
    changeNumPrevius();
    lastOpe.current = Operadores.subtract;
  }

  const btnAdd = () => {
    changeNumPrevius();
    lastOpe.current = Operadores.add;
  }

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
          text='=' color='#FF9427' action={clean}
        />
      </View>      

    </View>
  )
}

export default CalculatorScreen;
