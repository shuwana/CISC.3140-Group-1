# Whack-a-Prof Software Requirements Specification  

Project: Whack-a-Prof  
Document: SRS  
Authors: Group 1 Specs  

## Table of Contents  
[Introduction](#introduction)  
[Overview](#overview)  
[Interface Requirements](#interface-requirements)  
[Product Features](#product-features)  
[Nonfunctional Requirements](#nonfunctional-requirements)  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

## Introduction  
### Purpose  
This document is a working copy of specifications and requirements for the group project (Whack-A-Prof). It should describe what the MVP (Minimum Viable Product) will be and what it will include, who the end-users are, their requirements, and what the four teams do. For clarity, Specs, Specifications, and project requirements refer to a guideline or overview of any features, objectives, assets, or testing procedures required for the project. They do not involve any hardware requirements for the game, though this may be subject to change by the professor. An additional copy might be required and added to the SVN repo for this group to easily track each version of the specs.  

### Scope  
This specification sheet is to be used for all members of CISC 3140 TR11 group 1. It can be accessed by each member of each team as needed and should be referred to when implementing any feature required in the project (technical or non-technical). Should any feature/requirement be missing, it will be best to contact a member of the specs team directly so the changes can be reviewed and added.  

### Objective  
Whack-a-Prof is a spinoff of the well-known game Whack-a-Mole.The game is a single player game where the player has to whack targets that appear on the screen.  It uses the  representations of various professors from Brooklyn College as targets instead of the moles. The player’s score will accumulate with each successful hit, recording their score at the end of the game.  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

## Overview  

### Product Perspective  
The product described by these specifications is intended to serve as an independent project. All parts should be designed with the product in mind, except for any external dependencies used to simplify the creation process. However, these dependencies used should be carefully considered so that they fully meet the intended purpose of the specific feature or the project as a whole. The product described is meant to be an arcade-style game similar to Whack-a-Mole. Players should be allowed to start a game that lasts for a set amount of time. During this time, targets (professors) will pop up randomly, for random amounts of time. With each successful hit on the professors, the player’s score will increase. At the end of the game, the player’s score will be displayed.  

### Design  
Specific details of how the product will be designed should be included here. It should include design patterns/methodologies used.  

### User Characteristics
There is not a lot of required knowledge to use the product as intended, however, here is a list of characteristics that can be used to define who can or cannot use the product: 
- A general understanding of arcade games  
- Ability to use and operate a computer  
- Ability to have fun  

### Constraints  
Section reserved for any limitations that may occur during the development of the project  

### Assumptions and Dependencies  
Reserved for assumptions about the use of the project and any external requirements for its use.  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

## Interface Requirements  

### User Interface  
The product user interface will be split between three main screens which are the start screen, game screen, and end screen.  
#### Home Screen  
The user will have the option to start a new game of Whack-a-Prof. Additional settings may be configurable, such as difficulty or grid size. Should there be no user input the game will sit idle on the screen. On a start game input, the game will move to the next screen  
#### Game Screen  
The user will be allowed to start a game. A countdown may occur as a transition between the screens to allow the user to prepare. The game will continue for a specified amount of time and once the time limit is reached, it will proceed to the end screen.  
#### End Screen  
The user’s score will be displayed, along with a short message. The user will have the option to either restart a new game or continue to the home screen.  
### Hardware  
The game is intended to run within a browser, so browser support and an internet connection are required to run the game.  
### Software  
The game requires JavaScript support to be run in the browser. (specific browser support can be included here).  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

## Product Features  
This section should be reserved for the specific details of the project. It should list the requirements for the project, specific details regarding graphic assets, product features, etc. This will outline specific features/tasks and what they should do once completed.  
A separate section may be needed for projected/planned changes. This will help prioritize what needs to be done vs what should be done.  
### General Events  
For the product, specific event handling will be required. These events will be defined below as well as their general purpose. Their implementation will be better defined for a - given feature that requires them; these definitions serve to clear up any confusion regarding what the event is.  
- OnClick event: Represented by a complete left-mouse click. Event is completed and registered once the left-mouse has been released. If the cursor exits before the event completes, it will not be registered.  
- OnMouseDown event: Represented by pressing any mouse button (Left, middle, right). Event is triggered and completed once the button is pushed down. Does not need to be released for the event to be completed.  
- OnMouseUp event: Represented by releasing any mouse button (Left, middle, right). Event is triggered and completed when a pressed mouse button is released.  

### Cursor  
- Description: Track the player’s mouse movement/response while they are in any screen.  
- Stimulus: Mouse movement, mouse click events.  
- Functional Requirements:  
    - Image: The cursor should be represented by a hammer/mallet. PNG/SVG image formats should be used as they preserve transparency and can be resized without difficulty. Default state is a hammer up.
    - Mouse Movement: The cursor should accurately respond to the user's mouse movement with minimal delay.
    - Mouse Down: The cursor should indicate a hit when a mouse button is pressed. This should occur anywhere on the screen, regardless of if it occurs on a button or target. The cursor image should also change to strike state, which is a hammer down.
    - Mouse up: The cursor should indicate when a mouse button is released. The cursor image state should return to its default state, which is a hammer up.

### Start Screen  
- Description: Landing page/home screen for the product  
- Stimulus: Button clicks.  
- Functional Requirements:  
    - Start game button: The start button should trigger a new game when clicked.  
    - Settings button: The settings button should switch to a settings screen when clicked.  
    - Title: The start screen should include a title of the product. (TBD: specifics on how the title should appear, title animations, title design)  

### Game Board  
- Description: Background image to be displayed throughout the game. This can be reused between screens, swapping what is rendered ontop instead of changing both the foreground and background between screens.  
- Stimulus: None.  
Functional Requirements  
    - Image: The game board should be an aerial view of the brooklyn college campus.  
    - Spawn Cells: The game board should have specific cells where targets can pop up/disappear during the game. More specific details to be described in its own feature (See Mole Spawns feature).  

### Target Spawns
- Description: Specific areas where moles/targets may appear and disappear. The spawn timing should be randomized, as well as the target spawned.  
- Stimulus: No user stimulus, however, the spawns should be used randomly by the product to trigger a target spawn.  
- Functional Requirements:  
    - Targets: The Spawns should create a new target when triggered. A new target should only spawn when the current cell is unoccupied.  
    - Layout: The spawns should be in a grid format.  
    - Spawn function: The function will indicate which cell a target should spawn. It should check a list of free cells to avoid spawn collisions and assign a target to the cell. Additional implementation details TBD (should the function handle creation or create a separate function, should we use target scheduling or assign as needed, etc.)  
    - Spawn Limit: To control the difficulty of the game, a limit of how many targets can spawn at once should be set. There is no current agreed upon limit, but this can be determined as the game is tested/played.  
    - Spawn image: TBD. Should there be an image to represent each spawn? If so, what should it be? (hole in the ground, door, etc.)  

### Targets  
- Description: Target for the game. Each target should be represented as a professor and should include a hitbox so clicks can be registered. They should spawn in a spawn cell while the game screen is active.  
- Stimulus: Mouse click events, randomly generated appearance time.  
- Functional Requirements:  
    - Image: Each target will be represented by a randomly generated image of a Brooklyn College professor. Images can be sources from the Brooklyn College professor directory. Images should be delivered in PNG or SVG for resizeability and transparency.  
    - HitBox. Each target should include a hitbox the size of its image. The hitbox is to be used for determining whether the player has successfully hit a target. An OnClick event should be used for the hitbox to represent a full swing/completed hit. When hit, the target should disappear. (TBD: Hit sound)  
    - Time duration: Each target should appear for a randomly generated amount of time. At the end of this time limit, the target should disappear. (TBD: should hits be registered after the time limit, time limit range)  

### Player Score  
- Description: Component for tracking the players score for the current game.  
- Stimulus: Successful target hits  
- Functional Requirements:  
    - Score accumulation: The score should increase with each successful hit on a target. The amount increased may vary by target type.  
    - Appearance: Scorecard design TBD.  

### Time Tracker  
- Description: Component for tracking the time left in the current game  
- Stimulus: None.  
- Functional Requirements:  
    Timer: The component should count down from the max time until 0. Once the timer hits 0 the game should end and transition to the end screen.  
    Appearance: Component design TBD.  
    Time limit: Specific limit TBD, however, a limit of 60 seconds can be used for during development.  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

## Nonfunctional Requirements  
To be used for specific nonfunctional requirements. This may include testing procedures, Quality requirements, deployment, etc.  
