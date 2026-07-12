window.ROBLOX_COURSE = {
  title: '🎮 Roblox Builder Lab',
  game: 'Harvest a Galaxy',
  description: 'Build an original Roblox game where players plant star seeds, grow tiny planets, collect stardust, unlock rare cosmic traits, and upgrade their own galaxy.',
  lessons: [
    {
      id:'rb1',title:'🚀 Launch Roblox Studio',xp:40,skill:'Studio basics and safe project setup',
      goal:'Create a new Baseplate project and learn the Explorer, Properties, Toolbox, and Play buttons.',
      steps:['Open Roblox Studio and choose Baseplate.','Turn on Explorer and Properties from the View tab.','Rename the Workspace folder to GalaxyWorld.','Save the project as Harvest a Galaxy.','Press Play, move around, then press Stop.'],
      build:'Create a bright SpawnLocation and name it GalaxySpawn.',
      quiz:{q:'Which panel shows every object in your game?',choices:['Explorer','Chat','Avatar Shop'],answer:0,explanation:'Explorer is the organized list of parts, scripts, folders, and other objects in the game.'}
    },
    {
      id:'rb2',title:'🪐 Build the First Planet Plot',xp:50,skill:'Parts, size, position, color, and anchoring',
      goal:'Build a floating island where a player can grow a tiny planet.',
      steps:['Insert a Part and resize it into a wide platform.','Turn Anchored on so it does not fall.','Choose an original color and material.','Add a smaller circular planting pad.','Group the parts into a Model named PlanetPlot.'],
      build:'Create one floating plot with a planting pad and a sign that says “Plant Star Seed.”',
      quiz:{q:'Why should the floating platform be Anchored?',choices:['So it does not fall','So it becomes invisible','So it follows the player'],answer:0,explanation:'Anchored parts stay in place instead of falling because of gravity.'}
    },
    {
      id:'rb3',title:'💻 Your First Lua Script',xp:60,skill:'Scripts, variables, functions, and events',
      goal:'Make the planting pad react when a player touches it.',
      steps:['Insert a Script inside the planting pad.','Create a variable that points to script.Parent.','Connect the Touched event to a function.','Change the pad color when touched.','Test the game and inspect the Output window for errors.'],
      build:'Use this starter code and then change the color values:',
      code:"local pad = script.Parent\n\nlocal function onTouched(hit)\n    pad.Color = Color3.fromRGB(90, 200, 255)\nend\n\npad.Touched:Connect(onTouched)",
      quiz:{q:'What does script.Parent mean?',choices:['The object holding the script','The player’s parent','The Roblox website'],answer:0,explanation:'script.Parent is the object that contains the script.'}
    },
    {
      id:'rb4',title:'✨ Collect Stardust',xp:70,skill:'Collectibles, counters, and leaderstats',
      goal:'Create stardust orbs players can collect to earn currency.',
      steps:['Create a glowing orb Part named Stardust.','Add a Touched script that detects a player.','Create leaderstats with a Stardust value.','Add one stardust when the orb is collected.','Hide the orb briefly, then make it return.'],
      build:'Create three stardust orbs around the first planet plot.',
      code:"local Players = game:GetService('Players')\n\ngame.Players.PlayerAdded:Connect(function(player)\n    local stats = Instance.new('Folder')\n    stats.Name = 'leaderstats'\n    stats.Parent = player\n\n    local dust = Instance.new('IntValue')\n    dust.Name = 'Stardust'\n    dust.Value = 0\n    dust.Parent = stats\nend)",
      quiz:{q:'What should leaderstats store in this game?',choices:['The player’s Stardust','The sky color','The Studio password'],answer:0,explanation:'leaderstats can display player values such as Stardust on the leaderboard.'}
    },
    {
      id:'rb5',title:'🌱 Grow a Tiny Planet',xp:80,skill:'Cloning models and changing size',
      goal:'Let a player spend stardust to plant and grow a tiny planet.',
      steps:['Build a small planet Model and store it in ServerStorage.','Add a ProximityPrompt to the planting pad.','Check whether the player has enough Stardust.','Clone the planet onto the plot.','Grow it through three sizes using TweenService.'],
      build:'Make a planet that grows from seed size to full size after the player pays 5 Stardust.',
      quiz:{q:'Why store the planet model in ServerStorage?',choices:['Players cannot directly access it, and the server can clone it safely','It automatically publishes the game','It makes every part Anchored'],answer:0,explanation:'ServerStorage is a safe server-only place for templates that scripts can clone.'}
    },
    {
      id:'rb6',title:'🌈 Add Cosmic Traits',xp:90,skill:'Random selection and rarity',
      goal:'Give grown planets original traits such as Crystal, Storm, Neon, or Ringed.',
      steps:['Create a table of possible planet traits.','Give each trait a rarity weight.','Roll a trait when a planet finishes growing.','Change color, material, particles, or rings to match.','Display the trait name above the planet.'],
      build:'Add at least four original traits. Keep all names, models, and artwork your own.',
      code:"local traits = {'Crystal','Storm','Neon','Ringed'}\nlocal chosen = traits[math.random(1, #traits)]\nprint('New planet trait:', chosen)",
      quiz:{q:'What does math.random help the game do?',choices:['Choose a random result','Delete every player','Publish automatically'],answer:0,explanation:'math.random can choose different outcomes, such as a planet trait.'}
    },
    {
      id:'rb7',title:'🖥 Build the Galaxy HUD',xp:100,skill:'ScreenGui, labels, buttons, and player feedback',
      goal:'Show Stardust, planet progress, and the next upgrade clearly on screen.',
      steps:['Create a ScreenGui in StarterGui.','Add a Stardust counter TextLabel.','Add a planet growth progress bar.','Add an Upgrade button.','Use LocalScripts to update the interface.'],
      build:'Create a mobile-friendly HUD with large text and buttons.',
      quiz:{q:'Where should a player’s on-screen interface usually begin?',choices:['StarterGui','Lighting','ServerStorage'],answer:0,explanation:'Objects in StarterGui are copied into each player’s interface.'}
    },
    {
      id:'rb8',title:'🏆 Test and Publish Safely',xp:140,skill:'Testing, debugging, originality, and publishing',
      goal:'Test the complete game, fix errors, and publish a safe first version.',
      steps:['Use Play and Start Server tests.','Check the Output window and fix red errors.','Confirm purchases and rewards cannot be triggered repeatedly by accident.','Use only original or properly licensed assets.','Publish privately first and review privacy, chat, and age settings with a parent.'],
      build:'Complete the playable loop: collect stardust → plant → grow → reveal trait → upgrade plot.',
      quiz:{q:'What is the safest publishing plan for a child developer?',choices:['Publish privately and review settings with a parent','Share personal information in the description','Copy another game’s assets'],answer:0,explanation:'A parent should review publishing, privacy, monetization, and communication settings before a child releases a game.'}
    }
  ]
};