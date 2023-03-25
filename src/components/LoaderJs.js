import React from 'react';
import {View, Image, Modal, StyleSheet} from 'react-native';

const LoaderJs = ({modalVisible}) => (
  <Modal transparent visible={modalVisible}>
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../assets/images/loader.gif')}
        />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  imgContainer: {
    width: 90,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

export default LoaderJs;
