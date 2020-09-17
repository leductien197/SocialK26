 import React from 'react';
import {
  Dimensions, Image,
  ScrollView, Text,




  TouchableOpacity, View
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { default as FontAwesome, default as Icon } from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { removeAuth } from '../../actions/authAction';
import colors from '../../themes/Colors';
import metrics from '../../themes/Metrics';
import styles from './ProStyles';

export default function ProfileScreen() {
  
  var screenHeight = Dimensions.get('window').height;
  const dispatch = useDispatch();
  const onLogout = () => {
    try {
      dispatch(removeAuth());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={{minHeight: screenHeight}}>
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: colors.frost,
          paddingBottom: '100%',
        }}>
        <View style={styles.view_top}>
          <View>
            <Text>
              <Icon name="arrow-left" size={30} color={colors.snow} />
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 30, color: colors.snow, marginLeft: 30}}>
              Profile
            </Text>
          </View>
        </View>
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
              marginTop: '10%',
            }}
            source={require('../../images/ins.png')}
          />
        </View>
        <View style={styles.op1}>
          <View style={styles.profile}>
            <FontAwesome name="envelope-o" size={25} color={colors.facebook} />

            <Text style={{padding: metrics.baseMargin}}>Become a Member</Text>
          </View>

          <View style={styles.profile}>
            <MaterialIcons
              name="envelope-o"
              size={25}
              color={colors.facebook}
            />

            <Text style={{padding: metrics.baseMargin}}>Help</Text>
          </View>

          <View style={styles.profile}>
            <AntDesign
              name="customerservice"
              size={25}
              color={colors.facebook}
            />

            <Text style={{padding: metrics.baseMargin}}>Terms of service</Text>
          </View>

          <View style={styles.profile}>
            <Foundation name="shield" size={25} color={colors.facebook} />

            <Text style={{padding: metrics.baseMargin}}>Private policy</Text>
          </View>
        </View>
        <View style={styles.op2}>
          <View style={styles.profile}>
            <FontAwesome name="gears" size={25} color={colors.facebook} />

            <Text style={{padding: metrics.baseMargin}}>Setting</Text>
          </View>

          <View style={styles.profile}>
            <Entypo
              onPress={() => onLogout()}
              name="log-out"
              size={25}
              color="red"
            />
            <TouchableOpacity onPress={() => onLogout()}>
              <Text style={{padding: metrics.baseMargin}}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
