// @flow

const apiRoot = process.env.REACT_APP_API_ROOT || '//localhost:4000';

function createUrl(url: string) {
  return `${apiRoot}${url}`;
}

export function post(url: string, data: any) {
  return fetch(
    createUrl(url),
    {
      body: JSON.stringify(data),
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
    },
  )
    .then((response) => {
      if (!response.ok) {
        return response.json()
          .then((err) => {
            throw new Error(err.message);
          })
          .catch(() => {
            throw new Error(response.statusText);
          });
      }

      return response.json();
    });
}
