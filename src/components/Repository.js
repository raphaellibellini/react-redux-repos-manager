import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import * as RepoActions from '../store/actions/search';
import { connect } from 'react-redux';
import api from '../services/api';

class Repository extends Component {
    updateRepository = async (repo) => {
        const resp = await api.get(`/repos/${repo.owner.login}/${repo.name}`);

        const { id, owner: { avatar_url, login }, name, stargazers_count, language, forks } = resp.data;
        repo = { id, owner: { avatar_url, login }, name, stargazers_count, language, forks };

        this.props.updateRepo(repo);

        /*
        let newRepositories = this.state.repositories.map(r => (
            r.id === repo.id ? repo : r
        ))

        this.setState({ repositories: newRepositories })
        */
    }

    render() {
        const { repo } = this.props;

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
                            <FontAwesomeIcon icon={faSyncAlt} size='2x' color='green' className='icon' onClick={() => this.updateRepository(repo)} />
                            <FontAwesomeIcon icon={faTrashAlt} size='2x' onClick={() => this.props.deleteRepo(repo)} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteRepo: (repo) => dispatch(RepoActions.deleteRepo(repo)),
        updateRepo: (repo) => dispatch(RepoActions.updateRepo(repo))
    }
}

export default connect(null, mapDispatchToProps)(Repository);