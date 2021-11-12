import dev from './dev';
import qa from './qa';

type IEnvType = 'dev' | 'qa';

const env: IEnvType = process.env?.VUE_APP_ENV || 'dev';

export interface ICommonConfig {
  staticRoot: string;
  staticCssRoot: string;
  domains: IDomain;
}

const envConfig = {
  dev,
  qa,
  local: qa,
  stg: qa,
  prod: qa,
};

interface IDomain {
  ESCROW: string;
  BASE: string;
  SEARCH: string;
  PARTNER: string;
  LIVE_BASE: string;
  LIVE_USER: string;
  LIVE_SEARCH: string;
  LIVE_PROMOTION: string;
  WONDER_SHOPPING: string;
  WONDER_LOGIN: string;
  ADSEARCH_API: string;
  WONDER_TOUR: string;
  WONDER_TOUR_MYPAGE: string;
  TICKET: string;
  WMARS_API: string;
  W_TALK: string;
}

export interface IConfig extends ICommonConfig {
  name: string;
}

const defaultConfig: IConfig = {
  name: '위메프',
  ...envConfig[env],
};

export default defaultConfig;
