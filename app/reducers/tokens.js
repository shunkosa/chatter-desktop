// @flow
import type { Tokens } from '../types';

const convert = (rawTokens): Tokens => ({
  accessToken: rawTokens.access_token,
  refreshToken: rawTokens.refresh_token,
  instanceUrl: rawTokens.instance_url,
});

export default function tokensReducer(state: ?Tokens = null, action: any) {
  switch (action.type) {
    case 'SET_TOKENS':
      return convert(action.payload.tokens);
    default:
      return state;
  }
}
