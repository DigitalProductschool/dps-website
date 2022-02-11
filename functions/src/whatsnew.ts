export {};
const fetch = require('node-fetch');
const functions = require('firebase-functions');
const facebookapi = functions.config().api.facebook;
const youtubeapi = functions.config().api.youtube;

exports.facebook = function(request: any, response: any) {
  fetch(
    'https://graph.facebook.com/v7.0/digitalproductschool/posts?fields=message,updated_time,full_picture,permalink_url&access_token=' +
      facebookapi
  )
    .then((res: { json: () => any }) => {
      return res.json();
    })
    .then((res: any) => {
      const respond = res.data[0];
      const thumbnail = respond.full_picture;
      const link = respond.permalink_url;
      const desc = respond.message;
      const time = respond.updated_time;
      response.set('Access-Control-Allow-Origin', '*');
      response.json({
        thumbnail: thumbnail,
        link: link,
        desc: desc,
        time: time,
      });
    })
    .catch((err: any) => {
      console.log('Error: ', err);
    });
};

exports.youtube = function(request: any, response: any) {
  fetch(
    'https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUvmerSnTMl2ZeoLtuKoONJQ&key=' +
      youtubeapi +
      '+&part=snippet&maxResults=10'
  )
    .then((res: { json: () => any }) => {
      return res.json();
    })
    .then((res: any) => {
      const respond = res.items[0].snippet;
      const desc = respond.description;
      const thumbnail = respond.thumbnails.high.url;
      const title = respond.title;
      const id = respond.resourceId.videoId;
      response.set('Access-Control-Allow-Origin', '*');
      response.json({ thumbnail: thumbnail, id: id, title: title, desc: desc });
    })
    .catch((err: any) => {
      response.set('Access-Control-Allow-Origin', '*');
      response.json({
        desc: 'Mini Stories are very handy when you want to talk about ...',
        thumbnail: 'https://i.ytimg.com/vi/AAPSTggR_E4/hqdefault.webp',
        title: 'What exactly are »Mini Stories«?',
        id: 'AAPSTggR_E4',
      });
    });
};
