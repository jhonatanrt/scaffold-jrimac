import { API } from 'aws-amplify';
// import history from '../../utils/history';

const parseException = (exception: any) => {
  const { response } = exception
  console.log({exception, response})
  if(exception.response.status === 401) {
    localStorage.clear();
    // history.push('/');

    throw {
      type: "error no autorizado"
    }
  } else {
    throw {
      type: "error another error"
    }
  }
}

const get = async (apiName: any, path: any, init: any) => {
  try {
    const response = await API.get(apiName, path, init);
    return response;
  
  } catch (exception) {
    return parseException(exception);
  }
}

const post = async (apiName: any, path: any, init: any) => {
  try {
    const response = await API.post(apiName, path, init);
    return response;
  
  } catch (exception) {
    return parseException(exception);
  }
}

const put = async (apiName: any, path: any, init: any) => {
  try {
    const response = await API.put(apiName, path, init);
    return response;
  
  } catch (exception) {
    return parseException(exception);
  }
}

const API_FETCH = {
get,
post,
put
}

export default API_FETCH;
