import React, { Component } from 'react';

import { 
  View, 
  StyleSheet,
  KeyboardAvoidingView, //Redemensiona o conteudo da tela (ex: ao abrir o teclado) 
  Text, //Campos de Textos
  TextInput, //Campos de EditText
  TouchableOpacity, //Botoes
  AsyncStorage //Similar ao LocalStorage do ReactJS
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
  
  state = {
    username: '',
  };
  
  handleInputChange = (username) => {
    this.setState({username});
  };

  handleLogin = async () => {
    const { username } = this.state;

    if(!username.length) return;

    await AsyncStorage.setItem('@Omnistack:username', username);

    this.props.navegation.navigate("Timeline");


  };
  
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.content}>
          {/* Icone do Twitter */}
          <View>
            <Icon name="twitter" size={64} color="#4BB0EE" />
          </View>
          
          {/* Campo do usuário */}
          <TextInput 
            style={styles.input}
            placeholder="Nome de usuário"
            value={this.state.username}
            returnKeyType="send" //escrito no botão "Enter" do teclado
            onSubmitEditing={this.handleLogin} // açao ao ser chamada ao clicar no botão "send"
            onChangeText={this.handleInputChange}
          />

          {/* Botão de acesso */}
          <TouchableOpacity onPress={this.handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
  
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 30
    },
  
    input: {
      borderWidth: 1,
      borderColor: "#DDD",
      borderRadius: 5,
      height: 44,
      paddingHorizontal: 15,
      alignSelf: "stretch",
      marginTop: 30
    },
  
    button: {
      height: 44,
      alignSelf: "stretch",
      marginTop: 10,
      backgroundColor: "#4BB0EE",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center"
    },
  
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold"
    }
  });
  