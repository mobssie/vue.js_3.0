import { ICommonConfig } from '@/common/config/index';

const config: ICommonConfig = {
  staticRoot: 'https://s.wemep-qa.co.kr/ui/v2.8.229/dist/m/css/pages/main.css',
  staticCssRoot: 'https://s.wemep-qa.co.kr/ui/v2.8.229/dist/m/css/pages/main.css',
  domains: {
    ESCROW: '//escrow-qa.wemakeprice.com',
    BASE: 'https://front-qa.wemakeprice.com',
    PARTNER: '//wpartner-qa.wemakeprice.com',
    SEARCH: '//search-qa.wemakeprice.com',
    LIVE_BASE: 'https://test.wemakeprice.com',
    LIVE_USER: '//test.wemakeprice.com',
    LIVE_SEARCH: 'http://search-stg.wemakeprice.com',
    LIVE_PROMOTION: 'http://promotion-stg.wemakeprice.com:8080',
    WONDER_SHOPPING: 'http://www-stg.wonder-shopping.com',
    WONDER_LOGIN: 'https://login.pre.wid.wemakeprice.com',
    ADSEARCH_API: 'https://adcenter-search-api-stg.wemakeprice.com/',
    WONDER_TOUR: 'https://tour-pre.wd.wemakeprice.com',
    WONDER_TOUR_MYPAGE: 'https://mtour-pre.wd.wemakeprice.com',
    TICKET: 'https://ticket-qa.wemakeprice.com',
    WMARS_API: 'https://wmars-client-qa.wemakeprice.com',
    W_TALK: 'https://wtalk-qa.wd.wemakeprice.com',
  },
};

export default config;
