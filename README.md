# Four Player Pong

## Description

Pong is a table tennis-themed twitch arcade sports video game featuring simple two-dimensional graphics manufactured by Atari. The two player game involves two rectangular "paddles" on either side of the screen, which in modern versions are controlled by the keyboard. It originally supported two players on a rectangular field, however Four Player Pong allows up to four players to participate on a square field.

## Setup

1. Install npm and node
Use [this](https://nodejs.org/en/download/prebuilt-installer) link.
2. Install pnpm
Use `npm i -g pnpm`. Make sure the npm `bin` directory is added to your `PATH`
3. Install project dependencies
Run `pnpm install`
4. Run the project devserver
Run `pnpm run dev`
5. Happy coding :)

## File Descriptions

`src/routes/+page.svelte` - This has all the physics components of the game, the configuration, and the io implementation
`src/routes/Field.svelte` - This is a graphical implementation of the field that allows `+page.svelte` to display the game state to the user.
`src/app.html` - This is an html template that Svelte injects elements into. Although it's a good practice not to modify it, ChatGPT would love messing with it.
`src/lib/flash.ts` - This is called in `+page.svelte` to make the background flash.
