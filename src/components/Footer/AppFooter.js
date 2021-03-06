import React, {Component} from 'react'
import {Footer, FooterTab, Button, Text} from 'native-base';
import {Link} from 'react-router-native'

export default class AppFooter extends Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button>
                        <Link to={`/`}>
                            <Text>Films</Text>
                        </Link>
                    </Button>
                    <Button>
                        <Link to={`/search`}>
                            <Text>Search</Text>
                        </Link>
                    </Button>
                    <Button>
                        <Link to={`/map`}>
                            <Text>Map</Text>
                        </Link>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
};
