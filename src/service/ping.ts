import { pingDatabase } from '../repository/ping';
export const ping = async () => {
  const response = await pingDatabase();
  return {message: `pong!! ->  ${response[0][0].response}`};
};
