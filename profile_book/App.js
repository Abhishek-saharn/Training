import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: {
        username: false,
        email: false,
        password: false
      },
      formData: {
        username: "",
        email: "",
        password: ""
      },
      valid: {
        username: false,
        email: false,
        password: false
      }
    }
  }
  handleUsername = (event) => {

    const { text } = event.nativeEvent;
    const isValid =  /^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$/.test(text);


    this.setState({
      active: {
        username: true
      },
      formData: {
        username: text
      },
      valid: {
        username: isValid
      }

    })
  }

  handleEmail = (event) => {

    const { text } = event.nativeEvent;
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = emailRegEx.test(text);


    this.setState({
      active: {
        email: true
      },
      formData: {
        email: text
      },
      valid: {
        email: isValid
      }

    })
  }

  handlePassword = (event) => {

    const { text } = event.nativeEvent;
    const passRegEx = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
    const isValid =  passRegEx.test(text);
    

    this.setState({
      active: {
        password: true
      },
      formData: {
        password: text
      },
      valid: {
        password: isValid
      }

    })
  }

  submitForm = () => {
    console.log(this.state);
    const allValid = (this.state.valid.email) && (this.state.valid.password) && (this.state.valid.username);
    if (allValid)
      console.log(allValid);
  }
  loginButton = () => {

  }

  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile Book</Text>
        <Text style={styles.title2}>Signup</Text>

        <TextInput type="text" onChange={this.handleUsername} style={styles.input} placeholder="Enter username" />
        {!this.state.valid.username && this.state.active.username && <Text style={styles.alert} >Invalid Username </Text>}

        <TextInput type="email" onChange={this.handleEmail} style={styles.input} placeholder="Enter Email" />
        {!this.state.valid.email && this.state.active.email && <Text style={styles.alert} > Invalid Email</Text>}

        <TextInput type="password" onChange={this.handlePassword} style={styles.input} placeholder="Enter Password" />
        {!this.state.valid.password && this.state.active.password && <Text style={styles.alert} >Password must be (8 in Length, UPPER & lower case, special char, number) </Text>}
        <Button color="#66CCCC" title="Submit" onPress={this.submitForm} />
        <Text style={styles.text}>Or</Text>
        <Button color="#66CCCC" title="Signin" onPress={this.loginButton} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#66CCCC'
  },
  title2: {
    fontSize: 18,
    color: '#66CCCC'
  },
  text: {

    color: '#66CCCC',
  },
  input: {
    padding: 5,
    margin: 5,
    width: 250
  },
  alert: {
    color: "#f00",
    fontSize: 10
  }
});


