type API = { 
  url: string,
  responseLookupKey: string
 }

const fetchData = ({url, responseLookupKey}: API) => {
  return fetch(url)
  .then(response => response.json())
  .then(response => {
    if (response[0]) {
      response = response[0];
    }
    const keys = responseLookupKey.split('.');
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

export const createResource = (resourceObject: API) => {
  return {
    pageData: wrapPromise(fetchData(resourceObject))
  }
}

export const getResource = (resourceObject: API) => {
  return {
    pageData: fetchData(resourceObject)
  }
}