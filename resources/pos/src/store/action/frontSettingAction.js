import apiConfig from '../../config/apiConfig';
import { apiBaseURL, frontSettingActionType, toastType } from '../../constants';
import { addToast } from './toastAction';

export const fetchFrontSetting = () => async ( dispatch ) => {
    apiConfig.get( apiBaseURL.FRONT_SETTING )
        .then( ( response ) => {
            dispatch( { type: frontSettingActionType.FETCH_FRONT_SETTING, payload: response.data.data } );
        } )
        .catch( ( error ) => {
            dispatch( addToast(
                { text: error.response?.data?.message || error.message, type: toastType.ERROR } ) );
        } );
}
