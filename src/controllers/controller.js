module.exports.getHello = (req, res, next) => {
  console.log("Merhaba, GET isteği attınız");
  return res.status(200).json({
    Message: "Get request was succesfully worked!",
  });
};
module.exports.postHello = (req, res, next) => {
  console.log("Merhaba, POST isteği attınız");
  return res.status(200).json({
    Message: "Post request was succesfully worked!",
  });
};
module.exports.putHello = (req, res, next) => {
  console.log("Merhaba, PUT isteği attınız");
  return res.status(200).json({
    Message: "Put request was succesfully worked!",
  });
};
module.exports.deleteHello = (req, res, next) => {
  console.log("Merhaba, DELETE isteği attınız");
  return res.status(200).json({
    Message: "Delete request was succesfully worked!",
  });
};
