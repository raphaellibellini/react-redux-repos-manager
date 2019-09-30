import { takeLatest, put, all } from 'redux-saga/effects';
import api from '../services/api';

function* getRepo(action) {
    try {
        const query = action.payload;

        const resp = yield api.get(`/repos/${query}`);

        const { id, owner: { avatar_url, login }, name, stargazers_count, language, forks } = resp.data;
        let repo = { id, owner: { avatar_url, login }, name, stargazers_count, language, forks };

        yield put({
            type: 'SUCCESS_REPO',
            payload: repo
        })
    } catch (error) {
        yield put({
            type: 'FAILURE_REPO'
        })
    }
}

export default function* root() {
    yield all([
        takeLatest('REQUEST_REPO', getRepo)
    ])
}
