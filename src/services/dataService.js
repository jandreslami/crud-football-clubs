 import fs from 'node:fs'

export function readData (){
    let filePath = process.env.DB_PATH 
    
    try {
    let data = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(data)
    } catch (e) {
        console.error(e)
    }
}