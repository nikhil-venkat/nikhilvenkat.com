type API = { 
  url: string,
  responseLookupKey: string
 }

const fetchData = ({url, responseLookupKey}: API) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "X-Master-Key": "$2b$10$t9Wy5Cn8oMsQL9Sxybd21.TXFO2tUM0YFMM/myhGw0hpUKe9sdM3G"
    },
  })
  .then(response => response.json())
  .then(response => {
    return response.record[responseLookupKey];
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
