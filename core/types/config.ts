export type DbDriver = 'MONGO'|'POSTGRES'|'MYSQL';

export interface DbConfig {
  driver: DbDriver,
  host: string;
  user: string;
  pwd: string;
  db: string;
}

export interface RedisConfig {
  host: string;
  port: number;
}

export interface CorsConfig {
  whiteList: string[];
  methods: string[];
}

export interface SocketConfig {
  path: string;
}

export interface Settings {
  appName: string;
  appHostName:string;
  corsConfig: CorsConfig;
  production: boolean;
  environment: string;
  port: number;
  socketConfig: SocketConfig;
  dbConfig: DbConfig;
  redisConfig: RedisConfig;
}