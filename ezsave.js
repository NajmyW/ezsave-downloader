const axios = require("axios");
async function ezsave(url) {
  try {
    let www;
    if (url === "douyin") {
      www = url.indexOf(".") + 1;
    } else {
      www = url.indexOf(".") + 1;
      const com = url.indexOf(".com");
      const getLink = url.substring(www, com);
      console.log(getLink);
      const { data } = (
        await axios.post(
          "https://ezsave.app/api/" + getLink + "/video-downloader",
          {
            url: url,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
      ).data;
      let result = {
        title: data[0].title,
        url: data[0].url,
        filename: data[0].filename,
        duration: data[0].duration,
        thumbnail: data[0].thumbnail,
      };
      return result;
    }
  } catch (e) {
    return e.response.data.error;
  }
}
/*
SUPPORT : youtube, instagram, twitter, facebook, tiktok, douyin
*/
