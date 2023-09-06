import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native'
import React, { useState } from 'react'

const SoXo = () => {
  const [inputNumber1, setInputNumber1] = useState('');
  const [inputNumber2, setInputNumber2] = useState('');
  const [inputNumber3, setInputNumber3] = useState('');
  const [inputNumber4, setInputNumber4] = useState('');
  const [inputNumber5, setInputNumber5] = useState('');
  const [inputNumber6, setInputNumber6] = useState('');

  const [result1, setResult1] = useState('');
  const [result2, setResult2] = useState('');
  const [result3, setResult3] = useState('');
  const [result4, setResult4] = useState('');
  const [result5, setResult5] = useState('');
  const [result6, setResult6] = useState('');

  const XoSo = () => {
    var arr = new Array(6);
    let check = 0, check1 = 0, check2 = 0, check3 = 0, check4 = 0, check5 = 0, checkSum = 0;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(Math.random() * 100);

    }
    setResult1(arr[0]);
    setResult2(arr[1]);
    setResult3(arr[2]);
    setResult4(arr[3]);
    setResult5(arr[4]);
    setResult6(arr[5]);
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];

    }
    arr.forEach(n => {
      if (inputNumber1 == n) {
        check = 1;
      } if (inputNumber2 == n) {
        check1 = 1;
      } if (inputNumber3 == n) {
        check2 = 1;
      } if (inputNumber4 == n) {
        check3 = 1;
      } if (inputNumber5 == n) {
        check4 = 1;
      } if (inputNumber6 == n) {
        check5 = 1;
      }

    });
    if (check == 1) {
      checkSum++;
    }
    if (check1 == 1) {
      checkSum++;
    }
    if (check2 == 1) {
      checkSum++;
    }
    if (check3 == 1) {
      checkSum++;
    }
    if (check4 == 1) {
      checkSum++;
    }
    if (check5 == 1) {
      checkSum++;
    }
    if (checkSum == 1) {
      ToastAndroid.show('Chúc mừng bạn đã trúng 1 cặp số', ToastAndroid.LONG);
    } else if (checkSum == 2) {
      ToastAndroid.show('Chúc mừng bạn đã trúng 2 cặp số', ToastAndroid.LONG);
    } else if (checkSum == 3) {
      ToastAndroid.show('Chúc mừng bạn đã trúng 3 cặp số', ToastAndroid.LONG);
    } else if (checkSum == 4) {
      ToastAndroid.show('Chúc mừng bạn đã trúng 4 cặp số', ToastAndroid.LONG);
    } else if (checkSum == 5) {
      ToastAndroid.show('Chúc mừng bạn đã trúng 5 cặp số', ToastAndroid.LONG);
    } else if (checkSum == 6) {
      ToastAndroid.show('Chúc mừng bạn đã trúng 6 cặp số', ToastAndroid.LONG);
    } else {
      ToastAndroid.show('Chúc may mắn lần sau', ToastAndroid.LONG);
    }
    check = 0;
  }


  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={[styles.textXS]}>Xổ Số Kiến Thiết</Text>
        <Text style={styles.title}>Thay vì treo sinh mạng của mình vào sợi dây thừng để bỏ nợ! Thì hãy treo niềm hi vọng của bạn vào chúng tôi!</Text>
        <Text style={[styles.textN]}>Vui lòng nhập số vào ô</Text>
      </View>
      <View style={{ flexDirection: 'row', }}>
        <TextInput
          style={[styles.TextInput]}
          keyboardType='numeric'
          value={inputNumber1}
          maxLength={2}
          onChangeText={text => setInputNumber1(text)}

        />
        <TextInput
          style={[styles.TextInput]}
          keyboardType='numeric'
          value={inputNumber2}
          maxLength={2}
          onChangeText={text => setInputNumber2(text)}
        />
        <TextInput
          style={[styles.TextInput]}
          keyboardType='numeric'
          value={inputNumber3}
          maxLength={2}
          onChangeText={text => setInputNumber3(text)}
        />
        <TextInput
          style={[styles.TextInput]}
          keyboardType='numeric'
          value={inputNumber4}
          maxLength={2}
          onChangeText={text => setInputNumber4(text)}
        />
        <TextInput
          style={[styles.TextInput]}
          keyboardType='numeric'
          value={inputNumber5}
          maxLength={2}
          onChangeText={text => setInputNumber5(text)}
        />
        <TextInput
          style={[styles.TextInput]}
          keyboardType='numeric'
          value={inputNumber6}
          maxLength={2}
          onChangeText={text => setInputNumber6(text)}
        // placeholder='Nhập số'

        />
      </View>
      <View>
        
      </View>

      <View style={styles.btn}>
        <Button
        title='Dò Kết Quả'
        onPress={XoSo} />
        </View>
      
      <Text style={[styles.textKQua]}>Kết quả</Text>

      <View style={{ flexDirection: 'row', }}>
        {/* một ô */}
        <View
          style={[styles.TextKQ]}
        >
          <Text
            style={[styles.Text1]}
          >{result1}</Text>
        </View>

        {/* một ô */}
        <View
          style={[styles.TextKQ]}
        >
          <Text
            style={[styles.Text1]}
          >{result2}</Text>
        </View>
        {/* một ô */}
        <View
          style={[styles.TextKQ]}
        >
          <Text
            style={[styles.Text1]}
          >{result3}</Text>
        </View>
        {/* một ô */}
        <View
          style={[styles.TextKQ]}
        >
          <Text
            style={[styles.Text1]}
          >{result4}</Text>
        </View>
        {/* một ô */}
        <View
          style={[styles.TextKQ]}
        >
          <Text
            style={[styles.Text1]}
          >{result5}</Text>
        </View>
        {/* một ô */}
        <View
          style={[styles.TextKQ]}
        >
          <Text
            style={[styles.Text1]}
          >{result6}</Text>
        </View>
      </View>
    </View>
  )
}

export default SoXo

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'red',
    padding: 24,
  },
  TextInput: {
    width: 50, 
    height: 50,
    backgroundColor: `#fff`,
    fontWeight: 'bold',
    margin: 5,
    flex: 1,
    textAlign: 'center',
  },

  title:{
    padding:10,
    borderRadius: 6,
    backgroundColor:'white',
    fontSize:15,
    fontWeight: 'bold',
    marginTop:40,
    marginLeft:30,
    marginRight:30
  },

  btn:{
    padding:10,
  },

  TextKQ: {
    width: 50, 
    height: 50,
    backgroundColor: `#fff`,
    fontWeight: 'bold',
    margin: 5,
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text1: {
    color: `#dc143c`,
    fontWeight: 'bold',
    margin: 10,
  },
  textXS: {
    fontSize: 30,
    fontWeight: 'bold',
    color: `yellow`,
  },
  textN: {
    marginTop: 30,
    marginBottom:10,
    fontWeight: 'bold',
    color: `white`,
  },

  textKQua:{
    margin:10,
    fontWeight: 'bold',
    color: `white`,
    textAlign: 'center',
    alignItems: 'center',
  }
})
