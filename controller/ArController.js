const jwt = require("jsonwebtoken");

const { User } = require("../models/user");
const { ArConfig } = require("../models/ArConfig.model");

exports.modelConfig = async (req, res) => {
  const token = req.headers.authorization;
  const decodedToken = jwt.verify(token, "userToken");

  const {
    urlModel,
    bucketLocation,
    sizeModel,
    scaleModel,
    rotationModelx,
    rotationModely,
    rotationModelz,
  } = req.body;

  let newArConfig = new ArConfig({
    urlModel: urlModel,
    bucketLocation: bucketLocation,
    sizeModel: sizeModel,
    scaleModel: scaleModel,
    rotationModel: [rotationModelx, rotationModely, rotationModelz],
    id_user: decodedToken.userId,
  });

  newArConfig
    .save({})
    .then((saveConfig) => {
      return res.status(200).send({ message: saveConfig });
    })
    .catch((err) => {
      return res.status(500).send({ err: err });
    });
};

exports.getModelConfig = async (req, res) => {
  const token = req.headers.authorization;
  const decodedToken = jwt.verify(token, "userToken");

  ArConfig.find({ id_user: decodedToken.userId })
    .then((findConfig) => {
      return res.status(200).send({ message: findConfig });
    })
    .catch((error) => {
      console.log(error);
      return res
        .status(500)
        .send({ message: "error al mostrar la configuracion de los modelos" });
    });
};

exports.getIdModelConfig = async (req, res) => {
  const token = req.headers.authorization;
  const decodedToken = jwt.verify(token, "userToken");
  console.log(req.params.idArconfig);

  ArConfig.findById({ _id: req.params.idArconfig })
    .then((findIdAr) => {
      return res.status(200).send({ message: findIdAr });
    })
    .catch((error) => {
      return res.status(500).send({ message: "error al mostrar" });
    });
};
