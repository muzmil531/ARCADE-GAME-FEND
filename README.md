# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.


### Steps taken to get game without getting errors

1. Read all the instructions given by the **UDACITY**, and cloned the SKELETION Project from github.
2. Initially when I Opened the page, I get to see only blank page and an error in console panel __allEnemies[]__.
3. Later Player Class also created and assigned to a variable.
4. For Actor (Player) I also Initiallised the below functions.
- __render()__
- __update()__
- __handleInput()__
5. I used **render()** for placing actor on canvas.
6. I used **update()** to update the actor position : updating function is already instiallised by parameter (dt).
7. **handleInput()** is used to handle the input given by player.
    for this method, they had already implemented some mechanism, in order to it I just modified steps to move (in px).
    + left arrow :: This key enables player to move left side until the actor reaches left corner.
    + right arrow :: This key enables player to move move side until the actor reaches right  corner.
    + up arrow :: This key enables player to move up side until the actor reaches top of the canvas.
    + down arrow :: This key enables player to move down side until the actor reaches  down corner.
8. If the actor reaches to the water layer (top of the canvas), then again he will get to initial position at where is started in addition of score +100.
9. Also implemented Enemy Activity in 2 functions (ie. **update()**,**render()***).
10. Using array I placed 3 enemies on canvas based of graphical measurement by the speed generated using JAVASCRIPT.
11. Used a innerHTML method to display score on Game OutPut display.
12. Once if actor touches the bug, actor gets killed and a sweet alert will rise with score he scored and a restart button in the alert.


### Output of the GAME

+ Once Actor reaches water layer, he will get to initial position along with score increament +100.
+ Once Actor Touches the bug, then player get a alert with score he gained.
