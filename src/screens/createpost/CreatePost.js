import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView 
} from 'react-native';
import {Fonts, Metrics, Colors} from '../../themes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import {createPost} from '../../service/Api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getAllPost} from '../../service/Api'

// react-native-image-picker sample_1
const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function CreatePost({navigation}) {
  const [data, setData] = useState({});
  const [imagePicker, setImagePicker] = useState({});

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => onPost()}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <Ionicons name={'send'} size={30} color={'green'} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, imagePicker, data]);

  const onChangeText = (value) => {
    setData((prev) => ({...data, content: value}));
  };

  // react-native-image-picker sample_2
  const onUpload = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        };
        setImagePicker(source);
      }
    });
  };

  const onPost = async () => {
    let form = new FormData();
    form.append('title', 'Ha Noi');
    form.append('content', data.content);
    form.append('location', 'Ha Noi');
    imagePicker && imagePicker.uri && form.append('imageUrl', imagePicker);

    try {
      const result = await createPost(form);
      if (result.status === 200) {
        navigation.pop();
      }
      console.log('result1111', result);
    } catch (error) {
      console.log('error', error);
    }

  //    React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //        const getPosts = async () => {
  //          const result = await getAllPost();
  //          setData(result.data.data);
  //        };
  //        getPosts();
  //     // The screen is focused
  //     // Call any action
  //   });

  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  // }, [navigation]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{padding: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://i.ytimg.com/vi/49ttxlWY6VA/maxresdefault.jpg',
              }}
              // source={{ uri: getImageUrl(user && user.avatar_url) }}
              style={{height: 60, width: 60, borderRadius: 30, marginRight: 10}}
            />
            <View style={{flex: 1}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {/* {user && user.user_name} */}Cee
              </Text>
            </View>
          </View>
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            flex: 1,
            textAlignVertical: 'top',
            fontSize: 18,
          }}
          onChangeText={text => onChangeText(text)}
          value={data.content}
          placeholder={`What's on your mind?`}
          multiline={true}
        />
        {imagePicker && imagePicker.uri && (
          <Image
            source={{uri: imagePicker.uri}}
            resizeMode="cover"
            style={{height: 100, width: '100%'}}
          />
        )}
        <View
          style={{justifyContent: 'center', alignItems: 'center', height: 50}}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => onUpload()}>
            <Text>Add your post</Text>
            <MaterialIcons
              name="photo-camera"
              size={20}
              color={Colors.facebook}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
