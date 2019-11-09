import { disbursemen } from '../models';
import crud from './crud';
const disbursementController = {
    disbursement_create: function (req, res, next) {
        crud.create(req, res, disbursemen);
    },
    disbursement_update = function (req, res, next) {
        crud.update(req, res, disbursemen);
    },
    disbursement_delete = function (req, res, next) {
        crud.remove(req, res, disbursemen);
    },
    disbursement_getAll = function (req, res) {
        crud.readMany(req, res, disbursemen);
    }
}

export default disbursementController;