# Component confusion

This is a repo using vite and and the [vidstack.io](https://www.vidstack.io) player

 You can click [here](https://www.dropbox.com/s/84svoc29fqszobl/Screenshot%202024-03-09%20at%207.15.08%E2%80%AFPM.png?dl=0) to see what I'm trying to build.  There is a main media player at the bottom of the page.  and there are multiple play buttons beside a file, and each can use the main media player to start playing the associated track.

This repo is scaled down version of what I'm trying to implement with my eivu app. 

### Goal
 Build this app, launch it, and click the Play button so in the console the player object is NOT undefined

### Problem
I don't know how to make sibling components talk to each other. So that the button can see/trigger the media player


## Original Readme of this demo below
### Player: React (CSS)

This example demonstrates setting up your custom video player layout with CSS using Vidstack Player
React.

The CSS option we're building on provides you with a minimal starting point and completely
unstyled components. All components including the player itself provide styling hooks via data
attributes and support animations. This option is best when you want to build your player yourself
from scratch using vanilla CSS.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)][stackblitz-demo]

[stackblitz-demo]: https://stackblitz.com/fork/github/vidstack/examples/tree/main/player/react/css?title=Vidstack%20Player%20-%20React%20%28CSS%29&file=src/main.ts&showSidebar=1


