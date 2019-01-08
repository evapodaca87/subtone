// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
// import Tuner from './src/tuner';
// import Note from './src/note';

// export default class App extends Component {
//     state = {
//         note: {
//             name: 'A',
//             octave: 4,
//             frequency: 440
//         }
//     };

//     _update(note) {
//         this.setState({ note });
//     }

//     componentDidMount() {
//         const tuner = new Tuner();
//         tuner.start();
//         tuner.onNoteDetected = (note) => {
//             if (this._lastNoteName === note.name) {
//                 this._update(note);
//             } else {
//                 this._lastNoteName = note.name;
//             }
//         };
//     }

//     render() {
//         return (
// <View style={style.body}>
//     <StatusBar backgroundColor='#000' translucent />
//     <Note {...this.state.note} />
//     <Text style={style.frequency}>{this.state.note.frequency.toFixed(1)} Hz</Text>
// </View>
// <View style={style.body}>
//     <Image style={style.logo} source={require('./Images/logo.png')} />
//     <Text style={style.welcome}>Start</Text>
// </View>
//         );
//     }
// }

// const style = StyleSheet.create({
//     body: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'black',
//         width: '100%'
//     },
//     frequency: {
//         fontSize: 28,
//         color: 'blue'
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//         color: 'pink'
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5
//     },
//     logo: {
//         height: '30%',
//         width: '100%'
//     }
// });

import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import Tuner from './src/tuner';
import Note from './src/note';
import logo from './Images/logo.png';

export default class App extends Component {
    state = {
        note: {
            name: 'A',
            octave: 4,
            frequency: 440
        }
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
            <View style={style.body}>
                <StatusBar backgroundColor='#000' translucent />
                <Note {...this.state.note} />
                {/* <Bars /> */}
                <Text style={style.frequency}>{this.state.note.frequency.toFixed(1)} Hz</Text>
            </View>
            // <View style={style.body}>
            //     <Image style={style.logo} source={logo} />
            //     <Text style={style.welcome}>Start</Text>
            // </View>
        );
    }
}

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%'
    },
    frequency: {
        fontSize: 28,
        color: 'blue'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'pink'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    logo: {
        height: '30%',
        width: '100%'
    }
});
