import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {isEqual} from 'lodash';

import FilmList from "../components/FilmList/FilmList";
import {searchMovies} from '../actions/index';
import AppFooter from "../components/Footer/AppFooter";
import Search from '../components/Search/Search';

const mapStateToProps = state => ({
    movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
    searchMovies: bindActionCreators(searchMovies, dispatch),
});

class SearchScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            movies: this.props.movies,
        };
    }

    onChangeText = (searchText) => {
        this.setState({
            searchText,
        });
    };

    onPress = () => {
        this.props.searchMovies(this.state.searchText);
    };

    componentWillReceiveProps(newProps) {
        if (!isEqual(this.props, newProps)) {
            this.setState({
                movies: newProps.movies,
                searchText: '',
            });
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar translucent={false} barStyle="default"/>
                <Search
                    onChangeText={this.onChangeText}
                    value={this.state.searchText}
                    onPress={this.onPress}
                />
                <FilmList movies={this.state.movies}/>
                <AppFooter/>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
