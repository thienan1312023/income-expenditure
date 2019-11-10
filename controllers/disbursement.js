import { Disbursement } from '../models';
import crud from './crud';
const disbursementController = {
    disbursement_create: function (req, res, next) {
        crud.create(req, res, Disbursement);
    },
    disbursement_update: function (req, res, next) {
        crud.update(req, res, Disbursement);
    },
    disbursement_delete: function (req, res, next) {
        crud.remove(req, res, Disbursement);
    },
    disbursement_getAll: function (req, res) {
        crud.readMany(req, res, Disbursement);
    }
}

export default disbursementController;