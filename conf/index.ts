import * as convict from 'convict';
import * as debug from 'debug';
import * as fs from 'fs';

export interface Config {
  env: string;
  port: number,
  database: {
    connectionName: string;
    databaseType: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
}

const conf = convict<Config>({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test', 'local'],
    // tslint:disable-next-line:object-literal-sort-keys
    default: 'local',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    // tslint:disable-next-line:object-literal-sort-keys
    default: 4000,
    env: 'PORT',
  },
  database: {
    connectionName: {
      format: String,
      env: 'CONN_NAME',
      default: '',
    },
    databaseType: {
      format: String,
      env: 'TYPEORM_CONNECTION',
      default: '',
    },
    host: {
      format: String,
      env: 'TYPEORM_HOST',
      default: '',
    },
    port: {
      format: 'port',
      env: 'TYPEORM_PORT',
      default: 0,
    },
    username: {
      format: String,
      env: 'TYPEORM_USERNAME',
      default: '',
    },
    password: {
      format: String,
      env: 'TYPEORM_PASSWORD',
      default: '',
    },
    database: {
      format: String,
      env: 'TYPEORM_DATABASE',
      default: '',
    },
  }
});
const d = debug('kickstarter:conf');
const env = conf.get('env');
try {
  const path = `${__dirname}/${env}.json`;

  d('trying to access %s', path);
  fs.accessSync(path, fs.constants.F_OK);

  conf.loadFile(path);
} catch (error) {
  d('file doesn\'t exist, loading defaults');
}

conf.validate({ allowed: 'strict' });

export default conf;
