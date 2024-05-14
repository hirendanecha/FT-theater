const url = 'https://api.fuck.theater';
const webUrl = 'https://fuck.theater/';
const tubeUrl = 'https://tube.fuck.theater/';

// const url = 'http://localhost:8080';
// const webUrl = 'http://localhost:4200/';

export const environment = {
  production: false,
  hmr: false,
  serverUrl: `${url}/api/v1/`,
  socketUrl: `${url}/`,
  webUrl: webUrl,
  tubeUrl: tubeUrl,
  domain: '.fuck.theater',
  siteKey: '0x4AAAAAAAZb1uYH-5npImSI-5npImSI',
  secretKey: '0x4AAAAAAAZb1iHb_3xGDrbllALvv3JvbwI',
  qrLink: `${webUrl}settings/edit-profile/`,
  EncryptIV: 8625401029409790,
  EncryptKey: 8625401029409790,
};
