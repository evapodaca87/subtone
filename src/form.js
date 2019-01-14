import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
export default class FormExample extends Component {
    render() {
        return (
            <View style={style.allOfIt}>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder='Title' />
                        </Item>
                        <Item>
                            <Input placeholder='Artist' />
                        </Item>
                        <Item>
                            <Input placeholder='Key' />
                        </Item>
                        <Item>
                            <Input placeholder='Octave' />
                        </Item>
                        <Item>
                            <Input placeholder='Notes' />
                        </Item>
                        <Item last>
                            <Input placeholder='Initials' />
                        </Item>
                    </Form>
                </Content>
            </View>
        );
    }
}

const style = StyleSheet.create({
    allOfIt: {
        backgroundColor: 'black',
        height: '40%',
        flexDirection: 'column'
    }
});
