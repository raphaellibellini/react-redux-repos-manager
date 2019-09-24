import React, { Component } from 'react';
import { Grid, Segment, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as RepoActions from '../store/actions/search';
import api from '../services/api';

class Search extends Component {

    addRepository = async () => {
        try {
            const error = document.querySelector('.error');
            error.style.display = 'none';

            const resp = await api.get(`/repos/${this.props.query}`);

            const { id, owner: { avatar_url, login }, name, stargazers_count, language, forks } = resp.data;
            let repo = { id, owner: { avatar_url, login }, name, stargazers_count, language, forks };

            let found = this.props.repositories.find(r => r.id === repo.id);
            if (found !== undefined) {
                return;
            }

            this.props.dispatch(RepoActions.addRepo(repo));

            /*
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
    
            
            this.setState({
              repositories: [...this.state.repositories, {
                id,
                avatar_url,
                name,
                login,
                stargazers_count,
                language,
                forks
              }]
            });
            */

        } catch {
            const error = document.querySelector('.error');
            error.style.display = 'block';
        }
    }

    render() {
        return (
            <Grid className='search-component'>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Segment inverted color='yellow' textAlign='center' className='error'>Não foi possível localizar o repositório solicitado.</Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3} verticalAlign='middle' className='search-header'>
                    <Grid.Column width={2}>
                        <img alt='Logo do Github' src="https://img.icons8.com/ios-glyphs/60/000000/github.png"></img>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        Repositórios
                    </Grid.Column>
                    <Grid.Column width={1} textAlign='right'>
                        {this.props.repositories.length}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column width={12}>
                        <Input
                            focus
                            className='search-bar'
                            type='text'
                            value={this.props.query}
                            onChange={(evt) => this.props.dispatch(RepoActions.updateQuery(evt.target.value))}
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button color='purple' className='search-button' onClick={this.addRepository}>ADD</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    query: state.query,
    repositories: state.repositories
});

export default connect(mapStateToProps)(Search);