import React, { useState, useEffect } from 'react';
import { StyleSheet,Text, View, Image, Button } from 'react-native';
import { styles } from '../commonStyle';


const rock = require('../assets/rock.png')
const paper = require('../assets/paper.png')
const scissors = require('../assets/scissors.png')

const bgColors=['#7f8c8d','#9b59b6','#e67e22']

const rps = () => {
    const sign = [rock, paper, scissors];
    const random = Math.floor(Math.random() * 3)

    return sign[random]

}

const PlayScreen = () => {
    const [counter, setCounter] = useState(3)
    useEffect(() => {
        if (counter === 0) {
            return
        }
        const timer = setTimeout(() => {
            setCounter(counter - 1)
        }, 500);
        return () => {
            clearTimeout(timer)
        }
    }, [counter])
    return (
        <View
          style={StyleSheet.compose(
            styles.container2,
            {backgroundColor: bgColors[counter - 1]},
          )}>
            {(counter > 0) ? (
                <Text style={styles.header3}>{counter}</Text>
            ) :
                <View>
                    <Image source={rps()} style={styles.img} />
                    <View style={styles.btn}><Button
                        title="Play Again"
                        color="black"
                        onPress={() => {
                            setCounter(3)
                        }}
                    /></View>
                </View>
            }

        </View>
    );
}

export default PlayScreen;