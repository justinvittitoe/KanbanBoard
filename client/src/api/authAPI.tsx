import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch(
      //Authorization endpoint and what type of request
      '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/JSON',
        },
        //send the user info as a JSON string to the endpoint
        body: JSON.stringify(userInfo)
      },
    )
    //await the approved authentication - JWT webtoken should be returned
    const data = await response.json()
    //Important to keep the error message generic
    if(!response.ok) {
      throw new Error('Invalid user login, please try again')
    }
    return data
  } catch (err) {
    console.log('Error with login')
    return Promise.reject('Could Not login user')
  }
}



export { login };
