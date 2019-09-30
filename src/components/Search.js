import React, { Component } from 'react';
import { Grid, Segment, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Creators as RepoActions } from '../store/ducks/repos';
import api from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { bindActionCreators } from 'redux';

class Search extends Component {
    /*
    addRepository = async () => {
        const { query, repositories, addRepo } = this.props;

        try {
            const error = document.querySelector('.error');
            error.style.display = 'none';

            const resp = await api.get(`/repos/${query}`);

            const { id, owner: { avatar_url, login }, name, stargazers_count, language, forks } = resp.data;
            let repo = { id, owner: { avatar_url, login }, name, stargazers_count, language, forks };

            let found = repositories.find(r => r.id === repo.id);
            if (found !== undefined) {
                return;
            }

            addRepo(repo);

            
            this.setState((currentState) => ({
                repositories: currentState.repositories.concat({
                    id,
                    avatar_url,
                    login,
                    name,
                    stargazers_count,
                    language,
                    forks
                })
            }))
            

        } catch {
            const error = document.querySelector('.error');
            error.style.display = 'block';
        }
    }
    */

    render() {
        const { query, repositories, updateQuery, requestRepo } = this.props;

        return (
            <Grid className='search-component'>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Segment inverted color='yellow' textAlign='center' className='error'>Não foi possível localizar o repositório solicitado.</Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3} verticalAlign='middle' className='search-header'>
                    <Grid.Column width={2}>
                        <FontAwesomeIcon icon={faGithub} color='black' size='2x' className='github-icon' />
                    </Grid.Column>
                    <Grid.Column width={11} className='search-title'>
                        Repositórios
                    </Grid.Column>
                    <Grid.Column width={1} textAlign='right'>
                        {repositories.length}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column width={12}>
                        <Input
                            focus
                            className='search-bar'
                            type='text'
                            value={query}
                            onChange={(evt) => updateQuery(evt.target.value)}
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button color='purple' className='search-button' onClick={() => requestRepo(query)}>ADD</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    query: state.repos.query,
    repositories: state.repos.repositories
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(RepoActions, dispatch);

/*    
return {
    addRepo: (repo) => dispatch(RepoActions.addRepo(repo)),
    updateQuery: (query) => dispatch(RepoActions.updateQuery(query))
}
*/

export default connect(mapStateToProps, mapDispatchToProps)(Search);