import React, { useState} from 'react';
import { Text, View,Button } from 'react-native';
import { styles } from '../commonStyle';
import PlayScreen from './PlayScreen'
const Design = () => {
    const [play, setPlay] = useState(false)
        return play ? (<PlayScreen />):
            (
                <View style={styles.container}>
                <Text style={styles.header}>Rock Paper Scissors</Text>
                <Text style={styles.header2}>🗿📄✂</Text>
                <View style={styles.button}>
                <Button 
                title="Play"
                color="black"
                onPress={()=>{
                    setPlay(true)
                }}
                />
                </View>
            </View>
            );
}
    
export default Design;