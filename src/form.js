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
        height: '33%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputed: {
        backgroundColor: 'white',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
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
