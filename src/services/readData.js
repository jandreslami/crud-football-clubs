 import fs from 'fs'

export function readData (){
    let data = fs.readFileSync("data/teams.json")
    let formattedData = JSON.parse(data.toString())
    return formattedData
}
