import React, { useEffect, useState } from 'react';
import {Platform} from 'react-native';
import styled, { withTheme } from 'styled-components/native';


const Page = styled.SafeAreaView`
flex:1;
margin-top:50px;
align-items: center;
`;

const HeaderText = styled.Text`
font-size:25px;
font-weight:bold;
`;

const Input = styled.TextInput`
height: 40px;
font-size: 18px;
width: 300px;
background-color:#EEE;
margin-top:20px;
border-radius:10px;
padding:10px;
`;

const ButtonCalc = styled.Button`
margin-top:10px;
`;

const ResultArea = styled.View`
margin-top:150px;
width:100%;
justify-content:center;
background-color:#EEE;
padding:80px;
align-items:center;
`; 

const ResultItemTitle = styled.Text`
font-size:18px;
font-weight:bold;
`;

const ResultItem = styled.Text`
font-size:15px;
margin-bottom:30px;
`;



const PctItem = styled.TouchableOpacity`
padding-right:15px;
font-size:10px;
`;

const Text = styled.Text`
color: blueviolet;
`;

const AreaBotao = styled.View`
flex-direction:row;
align-items:center;
justify-content:space-around;
margin:20px; 
`;

const PctArea = styled.View`
flex:1;
flex-direction:column;
align-items:center;
padding:20px;
`;

const KeyboardArea = styled.KeyboardAvoidingView`
flex:1;
width:100%;
align-items:center;
justify-content:center;
`;

export default function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () =>{
    let nBill = parseFloat(bill);
    if(nBill){
    setTip(nBill*(pct/100));
    }
  }

  useEffect(()=>{
    calc();
  }, [pct]);
  
  return (
    
    <Page>
    <HeaderText>Calculadora de Gorjeta</HeaderText>
    <Input placeholder="Digite o valor da conta" keyboardType="numeric"
    value={bill} onChangeText={t=>setBill(t)} 
    />

   
      <AreaBotao>
      <PctItem  onPress={ () => setPct(5)}><Text>5%</Text></PctItem>
      <PctItem  onPress={ () => setPct(10)}><Text>10%</Text></PctItem>
      <PctItem  onPress={ () => setPct(15)}><Text>15%</Text></PctItem>
      <PctItem  onPress={ () => setPct(20)}><Text>20%</Text></PctItem>
      </AreaBotao>
      <ButtonCalc title={`Calcular ${pct} %`} onPress={calc} />

      <KeyboardArea behavior={Platform.OS == 'ios' ? 'padding' : null }>

    {tip > 0 &&
    <ResultArea>
      <ResultItemTitle>Valor da conta</ResultItemTitle>
      <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>
      <ResultItemTitle>Valor da gorjeta</ResultItemTitle>
      <ResultItem>R$ {tip.toFixed(2)} ({pct}%)</ResultItem>
      <ResultItemTitle>Valor total</ResultItemTitle>
      <ResultItem>R$ {(parseFloat(bill)+tip).toFixed(2)}</ResultItem>
    </ResultArea>
    }
    </KeyboardArea>
    </Page>
  );
}



