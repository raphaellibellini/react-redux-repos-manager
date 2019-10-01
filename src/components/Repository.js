import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Creators as RepoActions } from '../store/ducks/repos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Repository extends Component {
    render() {
        const { repo, deleteRepo, requestUpdateRepo } = this.props;

        return (
            <li>
                <Grid className='repo-component'>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <img src={repo.owner.avatar_url} className='repo-icon' alt='Logo do repositório'></img>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <h1 className='repo-name'>{repo.name}</h1>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <h2 className='repo-subtitle'>{repo.owner.login}</h2>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className='repo-info'>
                        <Grid.Column width={8} textAlign='left'>
                            Stars
                        </Grid.Column>
                        <Grid.Column width={8} textAlign='right'>
                            {repo.stargazers_count}
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className='repo-info'>
                        <Grid.Column width={8} textAlign='left'>
                            Language
                        </Grid.Column>
                        <Grid.Column width={8} textAlign='right'>
                            {repo.language}
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className='repo-info'>
                        <Grid.Column width={8} textAlign='left'>
                            Forks
                        </Grid.Column>
                        <Grid.Column width={8} textAlign='right'>
                            {repo.forks}
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className='repo-icons'>
                        <Grid.Column width={16} textAlign='right'>
                            <FontAwesomeIcon icon={faSyncAlt} size='2x' color='green' className='icon' onClick={() => requestUpdateRepo(repo)} />
                            <FontAwesomeIcon icon={faTrashAlt} size='2x' onClick={() => deleteRepo(repo)} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(RepoActions, dispatch);
/*
    return {
        deleteRepo: (repo) => dispatch(RepoActions.deleteRepo(repo)),
        updateRepo: (repo) => dispatch(RepoActions.updateRepo(repo))
    }
*/

export default connect(null, mapDispatchToProps)(Repository);