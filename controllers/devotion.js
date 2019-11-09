import { Devotion } from '../models';
import crud from './crud';
const devotionController = {
    devotion_create: function (req, res, next) {
        crud.create(req, res, Devotion);
    },
    devotion_update = function (req, res, next) {
        crud.update(req, res, Devotion);
    },
    devotion_delete = function (req, res, next) {
        crud.remove(req, res, Devotion);
    },
    devotion_getAll = function (req, res) {
        crud.readMany(req, res, Devotion);
    }
}

export default devotionController;