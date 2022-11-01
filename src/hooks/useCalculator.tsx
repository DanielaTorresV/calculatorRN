import { useState, useRef } from "react";


enum Operadores {
  add, subtract, multiply, split
}

const useCalculator = () => {
  
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

  const calculation = () => {
    
    const num1 = Number(num);
    const num2 = Number(numPrevius);

    switch (lastOpe.current) {
      case Operadores.add:
        setNum( `${ num1 + num2 }` );        
        break;
      case Operadores.subtract:
        setNum( `${ num2 - num1 }` );        
        break;
      case Operadores.multiply:
        setNum( `${ num1 * num2 }` );        
        break;
      case Operadores.split:
        if (num1 === 0) {
        setNum('División indeterminada');
        } else {
        setNum( `${ num2 / num1 }` );
        }        
        break;
    }
    setNumPrevius( '0' );
  }

  return {
    num,
    numPrevius,
    clean,
    posNeg,
    btnDel,
    btnSplit,
    doNum,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculation
  }
}

export default useCalculator;
