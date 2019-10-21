import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import BlinkApp from './BlinkApp'
import HeightWidth from './HeightWidth'

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="HeightWidth" component={HeightWidth} title="Flex-1" initial={true} />
            <Scene key="BlinkApp" component={BlinkApp} title="blink-app"/>
        </Scene>
    </Router>
)
export default Routes