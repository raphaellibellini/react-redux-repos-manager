import { takeLatest, put, all, select } from 'redux-saga/effects';
import api from '../services/api';

function* getRepo(action) {
    try {
        const state = yield select();
        const repositories = state.repos.repositories;

        const query = action.payload;
        console.log(query);

        const resp = yield api.get(`/repos/${query}`);

        const { id, owner: { avatar_url, login }, name, stargazers_count, language, forks } = resp.data;
        let repo = { id, owner: { avatar_url, login }, name, stargazers_count, language, forks };

        let found = repositories.find(r => r.id === repo.id);
        if (found !== undefined) {
            yield put({
                type: 'FAILURE_REPO',
                error: 'Não é permitido adicionar repositórios repetidos!'
            })
        } else {
            yield put({
                type: 'SUCCESS_REPO',
                payload: repo
            })
        }


    } catch (error) {
        yield put({
            type: 'FAILURE_REPO',
            error: 'Não foi possível adicionar o repositório!'
        })
    }
}

function* updateRepo(action) {
    try {
        let repo = action.payload;

        const resp = yield api.get(`/repos/${repo.owner.login}/${repo.name}`);

        const { id, owner: { avatar_url, login }, name, stargazers_count, language, forks } = resp.data;
        repo = { id, owner: { avatar_url, login }, name, stargazers_count, language, forks };

        yield put({
            type: 'SUCCESS_UPDATE_REPO',
            payload: repo
        })
    } catch (error) {
        console.error(error.toString());
        yield put({
            type: 'FAILURE_UPDATE_REPO'
        })
    }
}

export default function* root() {
    yield all([
        takeLatest('REQUEST_REPO', getRepo),
        takeLatest('REQUEST_UPDATE_REPO', updateRepo)
    ])
}
