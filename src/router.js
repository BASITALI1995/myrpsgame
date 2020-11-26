import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

import Design from '../src/screens/Design';

const AppStack = createStackNavigator({
    'Design':
    {
        screen: Design,
        navigationOptions: {
            header: null
        }
    },
},
    {
        initialRouteName: "Design",

    }
)
export default createAppContainer(AppStack);