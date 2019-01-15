import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text, Content, Form, Item, Input, Button, Icon } from 'native-base';

export default class FormExample extends Component {
    render() {
        return (
            <View style={style.allOfIt}>
                <Content>
                    <Form>
                        <Item style={style.inputed}>
                            <Input style={style.placeH} placeholder='Title' placeholderTextColor='white' />
                        </Item>
                        <Item style={style.inputed}>
                            <Input style={style.placeH} placeholder='Artist' placeholderTextColor='white' />
                        </Item>
                        <Item style={style.inputed}>
                            <Input style={style.placeH} placeholder='Key' placeholderTextColor='white' />
                        </Item>
                        <Item style={style.inputed}>
                            <Input style={style.placeH} placeholder='Initials' placeholderTextColor='white' />
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
        height: '33%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    inputed: {
        backgroundColor: 'white',
        flexDirection: 'column',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    logButton: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 0,
        padding: 0
    },
    placeH: {
        textAlign: 'center'
    }
});
