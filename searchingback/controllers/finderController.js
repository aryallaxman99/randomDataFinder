import recordsModel from "../models/recordsModel.js";

const sendRecords = async (req, res, next)=>{
    try {
      const name = req.body.name;
      const categories = req.body.categories;
      const types = req.body.types;
      const body = req.body.body;

      const response = await recordsModel.create({
        title: name,
        categories: categories,
        types: types,
        body: body,
      });
      res.json(response);
      next();
    } catch (error) {
      console.log(`error while sendBook ${error}`);
    }
  }

  const getRecords=(req, res)=>{
    // let categories = req.query.categories;

    try {
      // recordsModel.countDocuments(req.query).exec((err, count) => {
      //   if (err) {
      //     res.send(err);
      //     return;
      //   } else {
      //     console.log(count);
      //   }
      // });
      recordsModel.find(req.query, (err, result) => {
        err ? res.send(err) : res.json(result);
      });
    } catch (error) {
      console.log(`error while getBook ${error}`);
    }
  }

  const updateRecords=async(req, res, next)=>{
    const id = req.query.id;
    try {
      const update = {
        title: req.body.name,
        categories: req.body.categories,
        types: req.body.types,
        body: req.body.body,
      };
      await recordsModel.findByIdAndUpdate(
        { _id: id },
        update,
        {
          new: true,
          upsert: true,
          runValidators: true,
        },
        (err, result) => {
          err ? res.send(err) : res.json(result);
        }
      );
      next();
    } catch (error) {
      console.log(`error while updating book ${error}`);
    }
  }

 const deleteRecords=(req, res)=>{
    const { id } = req.params;
    try {
      recordsModel.findByIdAndDelete(
        {
          _id: id,
        },
        (err, result) => {
          if (err) {
            res.send(err);
          } else {
            res.json(result);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

export default {
  sendRecords,
  getRecords,
  updateRecords,
  deleteRecords
}