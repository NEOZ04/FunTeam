import * as React from 'react';
import {ReactBingmaps} from 'react-bingmaps';
import { View } from 'react-native';

class Map extends React.Component {

    render() {
        return (
            <View>
                <ReactBingmaps 
                bingmapKey="As6N1ipNw7-iAlL_Vc0imjsUaw_GmGGD9eD2LjCdFXj6VwLIEX-CfnYvo-fzoskT"
                center={[3.818570, 96.831841]}>

                </ReactBingmaps>
            </View>
        );
    }

}