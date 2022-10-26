export const homeQuery = `SELECT
teams.team_name AS name,
COUNT(matches.home_team_goals) AS j,
SUM(IF(matches.home_team_goals > matches.away_team_goals, 1, 0))  AS v,
SUM(IF(matches.home_team_goals = matches.away_team_goals, 1, 0))  AS e,
SUM(IF(matches.home_team_goals < matches.away_team_goals, 1, 0))  AS d,
SUM(matches.home_team_goals) AS gp,
SUM(matches.away_team_goals) AS gc
FROM TRYBE_FUTEBOL_CLUBE.matches AS matches
JOIN TRYBE_FUTEBOL_CLUBE.teams AS teams
ON matches.home_team = teams.id
WHERE matches.in_progress='0'
GROUP BY teams.team_name;`;

export const awayQuery = `SELECT
teams.team_name AS name,
COUNT(matches.away_team_goals) AS j,
SUM(IF(matches.away_team_goals > matches.home_team_goals, 1, 0))  AS v,
SUM(IF(matches.away_team_goals = matches.home_team_goals, 1, 0))  AS e,
SUM(IF(matches.away_team_goals < matches.home_team_goals, 1, 0))  AS d,
SUM(matches.away_team_goals) AS gp,
SUM(matches.home_team_goals) AS gc
FROM TRYBE_FUTEBOL_CLUBE.matches AS matches
JOIN TRYBE_FUTEBOL_CLUBE.teams AS teams
ON matches.away_team = teams.id
WHERE matches.in_progress='0'
GROUP BY teams.team_name;`;

export default { homeQuery, awayQuery };
