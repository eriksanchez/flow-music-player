export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQDoRy1NY8FWHJtLzOBKqg21UIvW7IkT7cMWNvitK_V1NJp4JGQeBofMvn7QZAa1M9w2QeHaThjw54p9DSMpBJ5qtjDn2a7aKwatKDPmXcBFylZQdqOQttXY5nipmK2g5uEgulFoYUNX6F2QKwLUt2iG6pev6rw",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
