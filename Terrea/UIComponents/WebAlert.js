import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';


export default class WebAlert extends React.Component {
    _displayNotifyAlert(){
        if(this.state.notifyAlert == true){
          return (
            <AwesomeAlert
              show={true}
              title="Service Cancellation"
              message="Tell the shop why are you cancelling their services."
              messageStyle={{ textAlign: 'center' }}
              customView={this.renderCustomAlertView()}
              showCancelButton={true}
              showConfirmButton={true}
              cancelText="Cancel"
              confirmText="Cancel Service"
              confirmButtonColor={Colors.default}
              onCancelPressed={() => this._closeNotifyAlert()}
              onConfirmPressed={() => this._cancelServices()}
            />
          )
        }
      }
      
      renderCustomAlertView = () => (
        <View style={[ AppStyles.input ]}>
          <TextInput
            placeholder="Write your reason briefly."
            underlineColorAndroid="transparent"
            style={{ textAlignVertical: 'top', height: 100 }}
            numberOfLines={5}
            multiline={true}
            maxLength={200}
            onChangeText={(cancel_reason) => this.setState({cancel_reason})} />
        </View>
      )
}