import { sightingEvents } from '../events/sightingEvents.js';
import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sendResponse } from "../utils/sendResponse.js";
import {addNewSighting} from "../utils/addNewSighting.js"
import { sanitizeInput } from "../utils/sanitizeInput.js";

export async function handleGet(res) {
  const data = await getData()
  const content = JSON.stringify(data)
  sendResponse(res, 200,'application/json', content)
}

export async function handlePost(req, res) {
  try {
    const parseBody =await parseJSONBody(req)
    const sanitizedBody = sanitizeInput(parseBody)
    await addNewSighting(parseBody)

    sightingEvents.emit('sighting-added', sanitizedBody ) 

    sendResponse(res, 201,'application/json', JSON.stringify(parseBody))
    
  } catch (err) {
    sendResponse(res, 400, 'application/json', JSON.stringify({error: err.message}))
    
  }
}