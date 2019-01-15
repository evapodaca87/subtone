import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text, Content, Form, Item, Input, Button, Icon } from 'native-base';
import Modal from 'react-native-modal';
import Tuner from './tuner';
import Note from './note';
import bottom from '../Images/spinspin.gif';
import Navbar from '../Components/Navbar';

export default class FormExample extends Component {
    render() {
        return (
            <View style={style.allOfIt}>
                <Content>
                    <Form>
                        <Item style={style.inputed}>
                            <Input style={style.placeH} placeholder='Title' />
                        </Item>
                        <Item style={style.inputed}>
                            <Input style={style.placeH} placeholder='Artist' />
                        </Item>
                        <Item style={style.inputed}>
                            <Input style={style.placeH} placeholder='Key' />
                        </Item>
                        <Item style={style.inputed}>
                            <Input style={style.placeH} placeholder='Initials' />
                        </Item>
                        <Button style={style.logButton} onPress={this.props.inputLog}>
                            <Icon name='checkmark' />
                        </Button>
                    </Form>
                </Content>
            </View>
        );
    }
}

const style = StyleSheet.create({
    allOfIt: {
        backgroundColor: 'black',
        height: '33%',
        flexDirection: 'column',
        marginLeft: '10%'
    },
    inputed: {
        backgroundColor: 'white',
        width: '80%',
        justifyContent: 'center'
    },
    logButton: {
        width: '81%',
        marginLeft: '4%',
        justifyContent: 'center'
    },
    placeH: {
        textAlign: 'center'
    }
});
