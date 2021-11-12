import { ICommonConfig } from '@/common/config/index';

const config: ICommonConfig = {
  staticRoot: 'https://s.wemep.co.kr/ui/v2.8.229/dist/m/css/pages/main.css',
  staticCssRoot: 'https://s.wemep.co.kr/ui/v2.8.229/dist/m/css/pages/main.css',
  domains: {
    ESCROW: '//escrow-dev.wemakeprice.com',
    BASE: 'https://front-dev.wemakeprice.com',
    PARTNER: '//wpartner-dev.wemakeprice.com',
    SEARCH: '//search-dev.wemakeprice.com',
    LIVE_BASE: 'https://www.gagamel.com',
    LIVE_USER: '//www.gagamel.com',
    LIVE_SEARCH: 'http://search-dev.wemakeprice.com',
    LIVE_PROMOTION: 'http://promotion-dev.wemakeprice.com',
    WONDER_SHOPPING: 'http://www-stg.wonder-shopping.com',
    WONDER_LOGIN: 'https://login.pre.wid.wemakeprice.com',
    ADSEARCH_API: 'https://adcenter-search-api-dev.wemakeprice.com/',
    WONDER_TOUR: 'https://tour-dev.wd.wemakeprice.com',
    WONDER_TOUR_MYPAGE: 'https://mtour-dev.wd.wemakeprice.com',
    TICKET: 'https://ticket-dev.wemakeprice.com',
    WMARS_API: 'https://wmars-client-dev.wemakeprice.com',
    W_TALK: 'https://wtalk-dev.wd.wemakeprice.com',
  },
};

export default config;
