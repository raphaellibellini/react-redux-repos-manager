import React from 'react';
import Repository from './Repository';
import { connect } from 'react-redux';

const List = ({ repositories }) => {
    return (
        <ul className='repo-list'>
            {repositories.map((repo, index) => (
                <Repository key={index} repo={repo} />
            ))}
        </ul>
    )
}

const mapStateToProps = state => ({
    repositories: state.repos.repositories
});

export default connect(mapStateToProps)(List);