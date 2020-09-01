import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../themes/Colors';
import metrics from '../../themes/Metrics';
import styles from './CreateStyles';

export default function CreatePost() {

  var screenHeight = Dimensions.get('window').height;
  return (

    <ScrollView style={{ minHeight: screenHeight }}>
      <View style={styles.view_top}>
        <View>
          <Text>
            <Icon name="arrow-left" size={30} color={colors.snow} />
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 30, color: colors.snow, marginLeft: 30}}>
            CREATE POST
          </Text>
        </View>
      </View>

      <View style={styles.view_user}>
        <View>
          <Text>
            <Icon name="instagram" size={50} color={colors.darkRed} />
          </Text>
        </View>
        <View>
          <Text style={{paddingLeft:15, fontSize:20}}>user admin</Text>
        </View>
      </View>
      <View styles={styles.view_input}>
        <TextInput style={styles.input} placeholder="bạn đang nghĩ gì" />
      </View>
      <View style={styles.view_bottom}>
        <View>
          <Icon name="instagram" size={30} color="#900" />
        </View>
        <View>
          <Text style={{color:colors.darkRed, paddingLeft:15}}>Photo</Text>
        </View>
      </View>
    </ScrollView>
  );
}
