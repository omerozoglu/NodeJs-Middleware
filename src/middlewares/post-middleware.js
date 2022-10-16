function postMiddleware(res, req, next) {
  console.log("Post isteği için istek gönderildi.");
  next();
}

module.exports = { postMiddleware };
