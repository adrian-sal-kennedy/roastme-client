// This here is a standardized fetch request because it gets tedious and error-prone typing the same stuff out over and over when you only change a couple of things.

// it takes a props object and a callback. the props object is concerned with the structure of the HTTP request - the route, the request type, the body, and whether a jwt is exchanged

// usage:
// genericFetch(
//   {
//     method: "GET",
//     auth: true,
//     route: "/recipes",
//     body: JSON.stringify(thingObject),
//   },
//   (response) => {
//     do.Something.like.setState(response)
//   }
// );

export default async function genericFetch(props, callback) {
  const { route, method, auth, body, errMessage } = props;
  const request = {};
  if (method) {
    request.method = method;
  }
  request.headers = {
    "Content-Type": "application/json",
  };
  if (auth) {
    request.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  if (body) {
    request.body = body;
  }
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}${route}`,
      request
    );
    if (response.status >= 400) {
      throw new Error(errMessage);
    } else {
      const jsonResponse = await response.json();
      callback(jsonResponse);
    }
  } catch (err) {
    this.setState({
      errMessage: err.message,
    });
  }
}

