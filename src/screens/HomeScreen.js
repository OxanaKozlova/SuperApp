import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FilmList from "../components/FilmList/FilmList";
import {getMoviesList} from '../actions/index';
import AppFooter from "../components/Footer/AppFooter";

const mapStateToProps = state => ({
    movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
    getMoviesList: bindActionCreators(getMoviesList, dispatch),
});

class HomeScreen extends Component {

    componentWillMount() {
        this.props.getMoviesList();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar translucent={false} barStyle="default"/>
                <FilmList movies={this.props.movies}/>
                <AppFooter/>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
