# Trivia game based on free anime quote api

The api shut me out for too many requests, so there is a scraper in the backend where I made my own private api with quotes from a website.
I kept it all in a free mongodb atlas cluster.

Frontend was,
1. highscores/users score fetching
2. quote fetching
3. submitting answers to backend then updating to show if wrong or right.

Backend was,
1. checking answers if correct/wrong update authed users score in db.
2. update highscores by best average (10/12 > 20/50)
3. handle google Oauth and session data
4. show new quotes with multiple choices without duplicates. 

The homepage was styled with vanilla css and svgs to make an interactive anime phone(showed your current time too) for logging in. 
Stlying beyond the home page was done with bootstrap. 
