
const initialState = {
  toke: localStorage.getItem("token"),
  isAuth: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", payload.token);
      return { ...state, ...payload, isAuth: true, loading: false };

    case "REGISTER_FAILED":
      localStorage.removeItem("token");
      return { ...state, token: null, isAuth: false, loading: false };

    default:
      return state;
  }
}
