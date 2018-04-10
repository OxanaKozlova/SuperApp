import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import net from 'axios';
import { isEqual } from 'lodash';

import { getLocation } from '../actions/index';
import AppFooter from "../components/Footer/AppFooter";
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const mapStateToProps = state => ({
  location: state.location,
});

const mapDispatchToProps = (dispatch) => ({
  getLocation: bindActionCreators(getLocation, dispatch),
});

 class MapScreen extends Component {

   constructor(props) {
     super(props);

     this.state = {
       location: {longitude: 37.78825, latitude: -122.4324}
     };
   }

   componentWillReceiveProps(newProps) {
     if (!isEqual(this.props, newProps)) {
       this.setState({
         location: newProps.location,
       });
     }
   }

 componentDidMount() {
   this.props.getLocation();
 }

  render() {

    const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
console.log(this.state.location);
    return (
      <View style ={styles.container}>
          <MapView
            style={styles.map}
            region={{
              latitude: this.state.location.latitude,
              longitude: this.state.location.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView>
        </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
