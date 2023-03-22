import { dbContext } from "../db/DbContext.js"

class HousesService {

    async getHouses(query) {
        const houses = await dbContext.Houses.find(query)
        return houses
    }
    createNewHouse(houseData) {
        const newHouse =
    }
    editHouse(editData, houseId) {

    }
    deleteHouse(houseId) {

    }

}

export const housesService = new HousesService()