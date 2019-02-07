import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

const { width } = Dimensions.get('window')
const imageSize = width - 48

const AlbumArt = ({ url, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.image}
        source={{ uri: url }}
      />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
})

export default AlbumArt
