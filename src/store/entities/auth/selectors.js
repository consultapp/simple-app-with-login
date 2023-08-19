const selectAuth = (state) => state?.auth;

export const selectIsAuth = (state) => selectAuth(state)?.isAuth || false;

export const selectUserName = (state) => selectAuth(state)?.name || "";
