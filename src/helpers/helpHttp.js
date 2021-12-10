export const helpHttp = () => {
  const customFetch = (endpoint, settings) => {
    const defaultHeaders = {
      accept: "application/json",
    };
    const controller = new AbortController();
    settings.signal = controller.signal;

    settings.method = settings.method || "GET";
    settings.headers = settings.headers
      ? { ...defaultHeaders, ...settings.headers }
      : defaultHeaders;

    settings.body = JSON.stringify(settings.body) || false;
    if (!settings.body) delete settings.body;

    console.log(settings);

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, settings)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "An error occurred",
            })
      )
      .catch((err) => err);
  };
  const get = (url, settings = {}) => customFetch(url, settings);
  const post = (url, settings = {}) => {
    settings.method = "POST";
    return customFetch(url, settings);
  };
  const put = (url, settings = {}) => {
    settings.method = "PUT";
    return customFetch(url, settings);
  };
  const del = (url, settings = {}) => {
    settings.method = "DELETE";
    return customFetch(url, settings);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
