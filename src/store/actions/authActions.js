export const signIn = (Credentials) => {
  return(dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      Credentials.email,
      Credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS '});
    }).catch((err) => {
      dispatch({ type: 'LOIN_ERROR', err});
    });
  }
}