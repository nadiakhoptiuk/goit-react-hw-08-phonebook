export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

export const getIsRefreshingUser = state => state.auth.isRefreshingUser;

export const getError = state => state.auth.error;
