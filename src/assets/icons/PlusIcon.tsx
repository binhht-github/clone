import React from 'react';
import { View, Text } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';

interface IIcon {
    size: number
    color: string
}

const PlusIcon = ({ size = 20, color = 'white' }: IIcon) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
            <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
            <G id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></G>
            <G id="SVGRepo_iconCarrier">
                <Path d="M6 12H18M12 6V18" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                </Path>
            </G>
        </Svg>
    );
}

export default PlusIcon;
