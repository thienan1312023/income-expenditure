import { Devotion } from '../models';
import crud from './crud';
const devotion_create = function (req, res, next) {
    crud.create(req, res, Devotion);
};

const devotion_update = function (req, res, next) {
    crud.update(req, res, Devotion);
};

const devotion_delete = function (req, res, next) {
    crud.remove(req, res, Devotion);
};

const devotion_getAll = function (req, res) {
    crud.readMany(req, res, Devotion);
}

export default {
    devotion_create,
    devotion_update,
    devotion_delete,
    devotion_getAll
}