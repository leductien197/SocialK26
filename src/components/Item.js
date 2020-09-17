import moment from "moment";
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
//import ScaleImage from 'react-native-scalable-image';
import FitImage from 'react-native-fit-image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, Fonts, Metrics } from '../themes';
import { imageProcess } from '../ultis/index';
import {connect, useDispatch, useSelector} from 'react-redux'
import { updatePost} from '../service/Api'


//import Lightbox from 'react-native-lightbox';
// https://stackoverflow.com/questions/39631895/how-to-set-image-width-to-be-100-and-height-to-be-auto-in-react-native

export default function Item(props) {
  
    const [item, setItem] = useState(props.data)
    const store = useSelector(store => store)
    const user = store.auth.me
    console.log('user', user)
    // const isLiked = item.likes.includes(user._id)

    const onLike = async () => {
      const cloneItemState = {...item}
      const checkIncludeLike = cloneItemState.likes.includes(user._id)
      const newArrLike = checkIncludeLike ? cloneItemState.likes.filter(e => e!== user._id) : cloneItemState.likes.concat([user._id])

      try {
        const result = await updatePost({
          postId: item._id,
          like: user._id
        })
        setItem(prev => ({...prev, likes: newArrLike}))             
      } catch (error) {
        console.log('error', error)
      }
  } 

  return (
    <TouchableOpacity >
      <View style={{ flexDirection: 'row', padding: Metrics.baseMargin }}>
        <Image source={require('../images/wallhaven-83mgq1.jpg')}
          style={{
            height: 50, width: 50, borderRadius: 25,
            marginRight: Metrics.baseMargin
          }}
        />
        <View>
          <Text style={{
            fontSize: Fonts.size.regular,
            fontWeight: 'bold'
          }}>{item.user_id.user_name}</Text>
          <Text style={{}}>{moment().format('DD/MM/YYYY hh:mm')}</Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        padding: Metrics.baseMargin
      }}>
        <Text>{item.content}</Text>
      </View>
      <View
        style={{
         // borderWidth: 1, borderColor: 'red',
          maxHeight: 500,
          overflow: 'hidden'
        }}
      >
        {props.data && props.data.image_url ? <FitImage
          source={{ uri: imageProcess(props.data.image_url) }}
          style={{}}
        />:null}
      </View>
      <View style={{
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between',
        margin: Metrics.baseMargin
      }}>
        <TouchableOpacity
          onPress={onLike}
          style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* <AntDesign  name= {isLiked ? "like1" : 'like2'} size={30} color={ isLiked ? Colors.facebook : 'black'} /> */}
            <Text>{item.likes.length}</Text>
        </TouchableOpacity>
        <View>
          <Text>{item.created_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}