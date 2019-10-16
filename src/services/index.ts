import API_FETCH from "./api/ApiFetch"
import { API } from "../utils/constants"

export default {
  get(pPayload: any) {
    return API_FETCH.post(API.NAME, '/adn/obteneradn', {body: pPayload})
  },
  save(pPayload: any) {
    return API_FETCH.post(API.NAME, '/adn', {body: pPayload})
  }
}
