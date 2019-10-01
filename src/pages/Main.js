import React, { Component } from 'react';
import Search from '../components/Search';
import List from '../components/List';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';

class Main extends Component {
    render() {
        const { loading } = this.props;

        return (
            <div>
                <Dimmer active={loading} className='dimmer'>
                    <Loader>Loading</Loader>
                </Dimmer>
                <Search />
                <List />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.repos.loading
});

export default connect(mapStateToProps)(Main);