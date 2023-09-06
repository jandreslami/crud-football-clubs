import fs from 'node:fs';
export async function findTeamByTLA (teamsArray, TLA){
    const requestedTeam =
    teamsArray.find(
        (team) => team.tla === TLA
    )
    return requestedTeam
}

export async function fileExists(filePath) {
    try {
        fs.accessSync(filePath, fs.constants.R_OK | fs.constants.W_OK)
        return true
    } catch (error) {
        console.error('Error checking file existence:', error.message)
        return false
    }
}
