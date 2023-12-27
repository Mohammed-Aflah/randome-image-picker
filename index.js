const { default: axios } = require("axios");

function pickRandomeImage() {
  try {
    axios.get("https://source.unsplash.com/random").then((response) => {
      return response.request.responseURL;
    });
  } catch (err) {
    return "net work eror";
  }
}
module.exports = pickRandomeImage;
