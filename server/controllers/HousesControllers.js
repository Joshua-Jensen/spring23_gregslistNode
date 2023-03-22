
import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .post('', this.createNewHouse)
            .put('/:houseId', this.editHouse)
            .delete('/:houseId', this.deleteHouse)
    }


    async getHouses(req, res, next) {
        try {
            const query = req.query
            const houses = await housesService.getHouses(query)
            res.send(houses)
        }
        catch (error) {
            next(error)
        }
    }


    async createNewHouse(req, res, next) {
        try {
            const houseData = req.body
            const newHouse = await housesService.createNewHouse(houseData)
        }
        catch (error) {
            next(error)
        }
    }


    editHouse(req, res, next) {
        try {
            const editData = req.body
            const houseId = req.params.houseId
            const editedHouse = await housesService.editHouse(editData, houseId)
            res.send(editedHouse)

        }
        catch (error) {
            next(error)
        }
    }


    deleteHouse(req, res, next) {
        try {
            const houseId = req.params.houseId
            await housesService.deleteHouse(houseId)
        }
        catch (error) {
            next(error)
        }
    }
}