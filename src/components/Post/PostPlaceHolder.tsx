import React, { useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder';

const { width } = Dimensions.get('screen')

const sizeIcon = 40
const sizeIconMusic = 45
const PostPlaceHolder = () => {

    const sizeItem = useMemo(() => {
        return (
            {
                width: sizeIcon,
                height: sizeIcon,
                borderRadius: sizeIcon / 2,
            }
        )
    }, [sizeIcon])


    const sizeItemMusic = useMemo(() => {
        return (
            {
                width: sizeIconMusic,
                height: sizeIconMusic,
                borderRadius: sizeIconMusic / 2,
            }
        )
    }, [sizeIcon])

    return (
        <Placeholder Animation={Fade} style={styles.container}>
            <View style={styles.view}>
                <PlaceholderLine style={[sizeItem]} color='gray' />
                <PlaceholderLine style={[sizeItem]} color='gray' />
                <PlaceholderLine style={[sizeItem]} color='gray' />
                <PlaceholderLine style={[sizeItem]} color='gray' />
                <PlaceholderLine style={[sizeItem]} color='gray' />
            </View>
            <View style={styles.viewTitle}>
                <PlaceholderLine style={styles.title} color='gray' />
                <PlaceholderLine style={[sizeItemMusic, styles.iconMusic]} color='gray' />
            </View>
        </Placeholder>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 1000,
    },
    view: {
        position: 'absolute',
        bottom: 60,
        right: 20,
    },
    viewTitle: {
        position: 'absolute',
        bottom: 0,
        left: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        width: width - 100,
        height: 20,
    },
    iconMusic: {
        marginLeft: 20,
    }
})

export default PostPlaceHolder;
