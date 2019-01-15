import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image } from 'react-native';
import { Root, Container, Header, Content, Button, Text, Icon, Toast } from 'native-base';
import Tuner from './src/tuner';
import Splash from './src/Splash';
import Main from './src/main';
import Log from './src/log';
import Saved from './src/saved';

export default class App extends Component {
    state = {
        note: {
            name: 'A',
            octave: 4,
            frequency: 440
        },
        showSplash: false,
        showMain: true,
        showLog: true,
        showSaved: true
    };

    toggleSplash = () => {
        this.setState({
            showSplash: true,
            showMain: false,
            showLog: true,
            showSaved: true
        });
        Toast.show({
            text: 'EPILEPSY WARNING',
            position: 'top',
            textStyle: {
                color: 'red',
                textAlign: 'center'
            },
            duration: 1000
        });
    };

    toMain = () => {
        this.setState({
            showSplash: true,
            showMain: false,
            showLog: true,
            showSaved: true
        });
    };

    toggleHome = () => {
        this.setState({
            showSplash: false,
            showMain: true,
            showLog: true,
            showSaved: true
        });
    };

    toggleLogPage = () => {
        this.setState({
            showSplash: true,
            showMain: true,
            showLog: true,
            showSaved: false
        });
    };

    toggleLog = () => {
        console.log('PRESSSSSSSSSS');
        this.setState({
            showSplash: true,
            showMain: true,
            showLog: false,
            showSaved: true
        });
    };

    inputLog = () => {
        this.setState({
            showSplash: true,
            showMain: false,
            showLog: true,
            showSaved: true
        });
        Toast.show({
            text: 'Entry Logged!',
            position: 'top',
            textStyle: {
                color: 'yellow',
                textAlign: 'center'
            },
            duration: 1500
        });
    };

    _update(note) {
        this.setState({ note });
    }

    componentDidMount() {
        const tuner = new Tuner();
        tuner.start();
        tuner.onNoteDetected = (note) => {
            if (this._lastNoteName === note.name) {
                this._update(note);
            } else {
                this._lastNoteName = note.name;
            }
        };
    }

    render() {
        return (
            <Root>
                <View style={style.body}>
                    {!this.state.showSplash && <Splash toggleSplash={this.toggleSplash} />}
                    {!this.state.showMain && (
                        <Main
                            toggleHome={this.toggleHome}
                            toggleLog={this.toggleLog}
                            toggleLogPage={this.toggleLogPage}
                            toMain={this.toMain}
                        />
                    )}
                    {!this.state.showLog && <Log toggleSplash={this.toggleSplash} inputLog={this.inputLog} />}
                    {!this.state.showSaved && <Saved toggleSplash={this.toggleSplash} />}
                </View>
            </Root>
        );
    }
}

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center'
    }
});
