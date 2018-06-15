import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { errors } from './errorReducer';
import { tweets, fetchTweetsError, fetchingTweets } from './tweetsReducer';
import { leagues, fetchLeaguesError, fetchingLeagues } from './leaguesReducer';
import { auth, loggingInUser, registeringUser } from './authReducer';

export default combineReducers({
  form,
  errors,
  auth,
  loggingInUser,
  registeringUser,
  tweets,
  fetchTweetsError,
  fetchingTweets,
  leagues,
  fetchLeaguesError,
  fetchingLeagues
});
