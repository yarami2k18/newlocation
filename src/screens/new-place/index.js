import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, Button} from 'react-native';
import {styles} from './style';
import {COLORS} from '../../constants';
import {useDispatch} from 'react-redux';
import placeActions from '../../store/action/places.action';
import ImageSelector from '../../components/molecules/image-selector';

const NewPlace = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleNameChange = text => setName(text);
  const handleSavePlace = () => {
    dispatch(placeActions.addPlace(name));
    navigation.navigate('Place');
  }
  const handleOnImage = uri => {
    console.warn(uri);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <ImageSelector onImage={handleOnImage} />
        <TextInput
          style={styles.input}
          onChangeText={handleNameChange}
          value={name}
        />
        <Button
          title="Save place"
          onPress={() => handleSavePlace()}
          color={COLORS.textColor}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
