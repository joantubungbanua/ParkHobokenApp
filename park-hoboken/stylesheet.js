import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    defaultView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%'
    },

    inputView: {
      backgroundColor: "white",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },

    buttonView: {
      marginVertical: 10,
    },

    button: {
      color: "#B26A65",
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
  
    loginBtn:
    {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },

    pin:{
      width: 5,
      height: 5,
      borderRadius: 150 / 2,
      backgroundColor: '#FF00FF',
    }
  });