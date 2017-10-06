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
    const isValid = /^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$/.test(text);

    let valid = { ...this.state.valid }   //Changing states of nested fields check: https://stackoverflow.com/questions/43040721/react-setstate-for-nested-state
    valid.username = isValid
    this.setState({ valid });


    let active = { ...this.state.active }
    active.username = true
    this.setState({ active });


    let formData = { ...this.state.formData }
    formData.username = text
    this.setState({ formData });

  }

  handleEmail = (event) => {

    const { text } = event.nativeEvent;
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = emailRegEx.test(text);


    let valid = { ...this.state.valid }
    valid.email = isValid
    this.setState({ valid });


    let active = { ...this.state.active }
    active.email = true
    this.setState({ active });


    let formData = { ...this.state.formData }
    formData.email = text
    this.setState({ formData });



  }

  handlePassword = (event) => {

    const { text } = event.nativeEvent;
    const passRegEx = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
    const isValid = passRegEx.test(text);

    let valid = { ...this.state.valid }
    valid.password = isValid
    this.setState({ valid });


    let active = { ...this.state.active }
    active.password = true
    this.setState({ active });


    let formData = { ...this.state.formData }
    formData.password = text
    this.setState({ formData });
  }

  submitForm = () => {
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


