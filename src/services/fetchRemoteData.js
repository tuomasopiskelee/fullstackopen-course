export const getRemoteData = async (action) => {
  let url = "";
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    url = "http://localhost:3001/api/" + action;
  } else {
    url = "/api/" + action;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const saveRemoteData = (action, data) => {
  let url = "";
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    url = "http://localhost:3001/api/" + action;
  } else {
    url = "/api/" + action;
  }

  //const response = await fetch(url);
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((rawResponse) => {
    return rawResponse.json();
  });
};
