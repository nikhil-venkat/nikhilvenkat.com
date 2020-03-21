type API = { 
  url: string,
  responseLookupKey: string
 }

const fetchData = (data: API) => {
  return fetch(data.url)
  .then(response => response.json())
  .then(response => {
    if (response[0]) {
      response = response[0];
    }
    const keys = data.responseLookupKey.split('.');
    keys.forEach((val, index) => {
      response = response[keys[index]];
    });
    return response;
  })
};

const wrapPromise = (promise: Promise<any>) => {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    (r: any) => {
      status = "success";
      result = r;
    },
    (e: any) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}

export const createResource = ({url, responseLookupKey}: API) => {
  return {
    pageData: wrapPromise(fetchData({url, responseLookupKey}))
  }
}

export const getResource = ({url, responseLookupKey}: API) => {
  return {
    pageData: fetchData({url, responseLookupKey})
  }
}