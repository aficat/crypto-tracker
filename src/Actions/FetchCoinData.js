import axios from 'axios';
import { apiBaseURL, API_KEY, QS } from './../Utils/Constants';
import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL } from './../Utils/ActionTypes';

export default function FetchCoinData() {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`${apiBaseURL}`, { headers: API_KEY }, { qs: QS })
            .then(res => {
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res })
            })
            .catch(err => {
                return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err })
            })
    }
}