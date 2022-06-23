import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/98272891?v=4';
const urlToMyGithub = 'https://github.com/gihcelly';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Gicelly com fundo cinza"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome: Gicelly Oliveira"
          style={[style.defaultText, style.name]}>
          Gicelly Oliveira
        </Text>
        <Text
          accessibilityLabel="Nickname: gihcelly"
          style={[style.defaultText, style.nickname]}>
          gihcelly
        </Text>
        <Text
          accessibilityLabel="Estudante de ADS"
          style={[style.defaultText, style.description]}>
          Estudante de ADS
        </Text>
        <View style = {style.historico}>
          <View style = {style.linha}>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
          </View>
          <View style = {style.linha}>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
          </View>
          <View style = {style.linha}>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
          </View>
          <View style = {style.linha}>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
          </View>
          <View style = {style.linha}>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoClaro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
          </View>
          <View style = {style.linha}>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
            <View style = {style.quadradoEscuro}></View>
          </View>
        </View>

        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    // Column
    backgroundColor: colorGithub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  historico: {
    marginTop: 20,
    width: 300,
    height:90,
  },

  linha: {
    width:300,
    height:15,
    flexDirection: 'row',
  },

  quadradoEscuro:{
    backgroundColor: '#0e4429',
    width: 15,
    height: 15,
    borderRadius: 7.5,
  },

  quadradoClaro:{
    backgroundColor: '#39d353',
    width: 15,
    height: 15,
    borderRadius: 7.5,
  },

});
