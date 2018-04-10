import React, { Component } from 'react'
import {Footer, FooterTab, Button, Text} from 'native-base';

export default class AppFooter extends Component {
	render() {
    return (
      <Footer>
    		<FooterTab>
    			<Button active>
    				<Text>Films</Text>
    			</Button>
    			<Button>
    				<Text>Search</Text>
    			</Button>
          <Button>
            <Text>"Map"</Text>
          </Button>
    		</FooterTab>
	     </Footer>
     )
   }
};
