import { greet } from './greet';
import { API_URL_MAP } from './Constants';
import { createResource, getResource } from './httpUtil';

export const greetUser = greet;
export const APIS = API_URL_MAP;
export const fetchResourcePromise = createResource;
export const fetch = getResource;
