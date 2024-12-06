# Four Player Pong - Design
test
## Overview

Pong is a table tennis–themed twitch arcade sports video game, featuring simple two-dimensional graphics, manufactured by Atari and originally released on 29 November 1972. The two player game involves two rectangular "paddles" on either side of the screen, which in modern versions are controlled by the keyboard. It originally supported two players on a rectangular field, however Four Player Pong allows up to four players to participate on a square field. 

1. Project Choice
 - **Option:** Web Game Design
 - **Game Title:** "Four Player Pong"

2. Purpose of the Game
 - **Goal:** The goal of players of Four Player Pong is to prevent the ball from exiting their side of the square field. It's a game that's simple to explain to friends and can scale to many people with a single device, leading to **network effects** and **growth**.
- **Target Audience:** Four Player Pong is intended for people with three or more present friends that desire to play a group game of Pong. This game is easy to explain, making it suitable as a local multiplayer game (the people you are in local proximity to may not be seasoned gamers).

3. Conceptualize the Design
**Aesthetics**:
 - **Visual Style**: Contrary to the original Pong's design, Four Player Pong should have a maximalist design that maximizes stimulation for idling players.
 - **Color Scheme:** Four Player Pong does not follow the convention of a color scheme as the full color wheel is used frequently in the design. Every opportunity is taken to increase contrast and stimulation
 - **Typeography:** Comic Sans
 - **Layout:** Screen Arrangement:
   - Game Area: The field occipies the majority of the screen
   - Score Display and Controlbar: This occupies the top of the screen and facilitates all mouse interactions.
   
 - **Navigation:** this is a single page app (SPA) and there is no Navigation.
**Functionality**
   - Movement: Each player can control their paddle using arbitrary keyboard keys.
   - Restart: There is a button in the top left that allows users to restart the game.
   - Scoring: A point is added to a player's score when the ball exits the field on their side. The player with the lowest score is winning.
   - Bouncing: When the ball hits a paddle: it bounces. It has an initial random direction and constant velocity, and maintains this velocity throughout the game. 

Mockup: 
![Mockup](https://i.imgur.com/xSdu1SM.png)
