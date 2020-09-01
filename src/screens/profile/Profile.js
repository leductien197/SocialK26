import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './ProStyles';
import colors from '../../themes/Colors';
import metrics from '../../themes/Metrics';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';

export default function () {
  var screenHeight = Dimensions.get('window').height;
  return (
    <ScrollView style={{minHeight: screenHeight}}>
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: colors.frost,
          paddingBottom:"100%",
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
            <Entypo name="log-out" size={25} color="red" />
            <TouchableOpacity>
              <Text style={{padding: metrics.baseMargin}}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
