 import fs from 'fs'

export function readData (){
    let data = fs.readFileSync("data/teams.json")
    let JSONData = JSON.parse(data.toString())
    return JSONData
}
