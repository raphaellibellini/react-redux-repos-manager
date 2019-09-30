import React from 'react';
import Repository from './Repository';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';

const List = ({ repositories, loading }) => {

    return (
        <div>
            <Dimmer active={loading} className='dimmer'>
                <Loader>Loading</Loader>

            </Dimmer>
            <ul className='repo-list'>
                {repositories.map((repo, index) => (
                    <Repository key={index} repo={repo} />
                ))}
            </ul>
        </div>

    )
}

const mapStateToProps = state => ({
    repositories: state.repos.repositories,
    loading: state.repos.loading
});

export default connect(mapStateToProps)(List);