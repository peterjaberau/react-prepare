// API endpoints for php-crud-api
import ky from 'ky';
import { Ok, Result } from 'ts-results';
import invariant from 'tiny-invariant';

const api = ky.create({
  prefixUrl: import.meta.env.VITE_API_PATH
});

const requestWrapper = (request: Promise<Response>): Promise<any> => {

  console.log('requestWrapper', request);

  return request
    .then((response: Response) => response.json())
    .catch((error: any) => {
      if (error instanceof TypeError) {
        throw new Error('Failed to connect to server. Please try again later.');
      } else {
        return error.response.json().then((data: any) => {
          throw new Error(data.message);
        });
      }
    });
};

export const login = async ({ username, password }: { username: string; password: string }): Promise<any> => {
  await new Promise((resolve: any) => setTimeout(resolve, 1_00));
  return new Ok({});
  // return requestWrapper(
  //   api.post('login', {
  //     json: {
  //       username,
  //       password
  //     }
  //   })
  // );
};

export const getUser = async (): Promise<any> => {
  await new Promise((resolve: any) => setTimeout(resolve, 1_00));
  return new Ok({
    id: '1',
    username: 'peterjaberau',
    avatar_character: 'A',
    avatar_background: null
  });
  // return requestWrapper(
  //   api.get('records/users')
  // ).then((data: any) => data.records[0]);
};

export const register = async ({ username, password }: { username: string; password: string }): Promise<any> => {
  await new Promise((resolve: any) => setTimeout(resolve, 1_00));
  return new Ok({});
  // return requestWrapper(
  //   api.post('register', {
  //     json: {
  //       username,
  //       password
  //     }
  //   })
  // );
};

export const updateUser = async ({ id, username, avatar_character, avatar_background }: { id: string; username: string; avatar_character: string; avatar_background: string }): Promise<any> => {
  await new Promise((resolve: any) => setTimeout(resolve, 1_00));
  return new Ok({});
  // return requestWrapper(
  //   api.put(`records/users/${id}`, {
  //     json: {
  //       username,
  //       avatar_character,
  //       avatar_background
  //     }
  //   })
  // );
};

export const updatePassword = async ({ username, password, newPassword }: { username: string; password: string; newPassword: string }): Promise<any> => {
  await new Promise((resolve: any) => setTimeout(resolve, 1_00));
  return new Ok({});
  // return requestWrapper(
  //   api.post('password', {
  //     json: {
  //       username,
  //       password,
  //       newPassword
  //     }
  //   })
  // );
};

export const logout = async (): Promise<any> => {
  await new Promise((resolve: any) => setTimeout(resolve, 1_00));
  return new Ok({});
  // return requestWrapper(
  //   api.post('logout')
  // );
};

export const listEntries = async ({ from, to }: { from?: string; to?: string } = {}): Promise<any> => {
  await new Promise((resolve: any) => setTimeout(resolve, 1_00));
  return new Ok([
    {
      "id": 140,
      "description": "search1",
      "start_time": "2024-12-08 05:27:48",
      "end_time": "2024-12-08 05:27:50",
      "projectid": null,
      "userid": 105
    },
    {
      "id": 141,
      "description": "222222",
      "start_time": "2024-12-08 05:27:57",
      "end_time": "2024-12-08 05:27:58",
      "projectid": null,
      "userid": 105
    }
  ]);


  // const searchParams: [string, string][] = [];
  // if (from) {
  //   searchParams.push(['filter', `start_time,ge,${from}`]);
  // }
  // if (to) {
  //   searchParams.push(['filter', `end_time,le,${to}`]);
  // }
  // return requestWrapper(
  //   api.get('records/entries', { searchParams })
  // ).then((data: any) => data.records);
};

export const createEntry = async ({ start_time, end_time, description, projectid }: { start_time: string; end_time: string; description: string; projectid: string }): Promise<any> => {
  await new Promise((resolve: any) => setTimeout(resolve, 1_00));
  return new Ok({});

  // return requestWrapper(
  //   api.post('records/entries', {
  //     json: {
  //       start_time,
  //       end_time,
  //       description,
  //       projectid
  //     }
  //   })
  // );
};

export const updateEntry = async ({ id, start_time, end_time, description, projectid }: { id: string; start_time: string; end_time: string; description: string; projectid: string }): Promise<any> => {
  await new Promise((resolve: any) => setTimeout(resolve, 1_00));
  return new Ok({});

  // return requestWrapper(
  //   api.put(`records/entries/${id}`, {
  //     json: {
  //       start_time,
  //       end_time,
  //       description,
  //       projectid
  //     }
  //   })
  // );
};

export const deleteEntry = async (id: string): Promise<any> => {
  await new Promise((resolve: any) => setTimeout(resolve, 1_00));
  return new Ok({});
  //
  // return requestWrapper(
  //   api.delete(`records/entries/${id}`)
  // );
};

export const createProject = async ({ name }: { name: string }): Promise<any> => {
  await new Promise((resolve: any) => setTimeout(resolve, 1_00));
  return new Ok({});
  //
  // return requestWrapper(
  //   api.post('records/projects', {
  //     json: {
  //       name
  //     }
  //   })
  // );
};

export const listStories = async ({ scope }: { scope?: string; } = {}): Promise<any> => {
  await new Promise((resolve: any) => setTimeout(resolve, 1_00));
  return new Ok([]);
};
