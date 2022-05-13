import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants';
import {styles} from './place-item/styles';

const PlaceItem = ({ name, address, onSelect}) => {
    console.log('name', name);
  return (
    <TouchableOpacity onPress={() => onSelect()} style={styles.container}>
      {/* <Image source={{uri: image}} style={styles.image} /> */}
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
