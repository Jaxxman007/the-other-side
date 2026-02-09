import path from 'node:path'
import fs from 'node:fs/promises'
import { getData } from './getData.js'


export async function addNewSighting(newSighting) {
  try {
    const sightings = await getData(newSighting)
    sightings.push(newSighting)
    
    const pathJson = path.join('data', 'data.json')
    await fs.writeFile(
      pathJson, JSON.stringify(sightings, null, 2), 'utf8')
    
  } catch (error) {
    throw error
  }
}