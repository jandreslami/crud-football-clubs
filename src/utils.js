export async function findTeamByTLA (teamsArray, TLA){
    const requestedTeam =
    teamsArray.find(
        (team) => team.tla === TLA
    )
    return requestedTeam
}