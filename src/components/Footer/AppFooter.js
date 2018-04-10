import React, { Component } from 'react'
import {Footer, FooterTab, Button, Text} from 'native-base';
import {  Link } from 'react-router-native'

import HomeScreen from '../../screens/HomeScreen';
import FilmScreen from '../../screens/FilmScreen';
import SearchScreen from '../../screens/SearchScreen';

export default class AppFooter extends Component {
	render() {
    return (
      <Footer>
    		<FooterTab>
    			<Button active>
          <Link to={`/`} >
            <Text>Films</Text>
          </Link>
    			</Button>
    			<Button>
          <Link to={`/search`} >
            <Text>Search</Text>
          </Link>
    			</Button>
          <Button>
              <Text>GoogleMap</Text>
          </Button>
    		</FooterTab>
	     </Footer>
     )
   }
};
