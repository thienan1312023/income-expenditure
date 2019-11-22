const create = (req, res, Collection) => {
    const newEntry = req.body;
    Collection.create(newEntry, (e, newEntry) => {
        if (e) {
            console.log(e);
            res.sendStatus(500);
        } else {
            res.send(newEntry);
        }
    });
};

const readMany = (req, res, Collection) => {
    let query = req.body.query || {};
    let options = req.query || {};
    const offset = options.offset && parseInt(options.offset);
    const limit = options.limit && parseInt(options.limit);
    Collection.paginate(query, { offset, limit }, (e, result) => {
        if (e) {
            res.status(500).send(e);
            console.log(e.message);
        } else {
            res.send(result);
        }
    });
};

const readOne = (req, res, Collection) => {
    const { _id } = req.params;

    Collection.findById(_id, (e, result) => {
        if (e) {
            res.status(500).send(e);
            console.log(e.message);
        } else {
            res.send(result);
        }
    });
};

const update = (req, res, Collection) => {
    const changedEntry = req.body;
    Collection.update({ _id: req.params.id }, { $set: changedEntry }, (e) => {
        if (e)
            res.sendStatus(500);
        else
            res.sendStatus(200);
    });
};

const remove = (req, res) => {
    Collection.remove({ _id: req.params._id }, (e) => {
        if (e)
            res.status(500).send(e);
        else
            res.sendStatus(200);
    });
};

export default {
    create,
    readMany,
    readOne,
    update,
    remove
};
