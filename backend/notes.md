## routes needed for app (MVP)

#### Login routes
 GET /login/google "get public info for local user storage"
 GET /oauth2/redirect/google "for authentication with google"

#### Dashboard routes
 GET /dashboard/uid "get top players and users score/total"
 GET /dashboard/guest "get top players"

#### Quiz routes
 GET /quiz/guest "let guest accounts just answer quiz questions with running tally"
 GET /quiz/uid "users score is increased for right answers and total is increased with each question"
 GET /quiz/* "gets quote, character, and anime movie random from api"
 POST /quiz/* "body contains quiz guess which is compared to movie for score"

