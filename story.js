export const SETTINGS = {
  third_penalty_chance: 0.65,

  // Venmo settings (used by index.html to build the link)
  venmo_username: "@outcastjaxton",
  venmo_note: "Small business support",

  messages: {
    correct: "that’ll do pig",
    penalty: "haha what a dumb pig",
    bottle: "sniff those fucking poppers cash pig"
  }
};

export const STORY = {
  start: "c1",
  scenes: {
    c1: {
      title: "Chapter 1 — The Fence Line",
      text:
`The Pig spots the Farmer leaning on the fence, calm as a sunset.
No shouting. No chasing. Just that steady look—like the Farmer already knows what the Pig will do next.

The Pig tells himself: “I’m free.”
The Farmer doesn’t argue. He just waits.`,
      choices: [
        "Trot away like you don’t care",
        "Walk closer and pretend it’s casual",
        "Snort once, loud, to prove a point"
      ],
      next: "c2"
    },

    c2: {
      title: "Chapter 2 — The Shiny Pail",
      text:
`Near the gate sits a shiny pail with a wooden ladle resting inside.
It wasn’t there yesterday. The Pig is sure of it.

The Farmer taps the fence twice.
Not a command—more like a suggestion.`,
      choices: [
        "Ignore the pail and sniff the grass",
        "Lift the ladle and peek inside",
        "Nudge the pail toward the Farmer with your snout"
      ],
      next: "c3"
    },

    c3: {
      title: "Chapter 3 — The Quiet Deal",
      text:
`The Pig remembers old rules: if you don’t look at the pail, it can’t matter.
But the Farmer’s silence is loud.

The barn door creaks in the distance.
Somewhere, a rooster laughs like he’s in on the joke.`,
      choices: [
        "Make a new rule: “Only one tiny favor”",
        "Ask (in pig language) what the Farmer wants",
        "Do the favor first—then ask questions"
      ],
      next: "c4"
    },

    c4: {
      title: "Chapter 4 — The Unlatched Gate",
      text:
`The gate is closed… but not latched.
That’s the thing about the Farmer: he doesn’t trap.
He tempts.

The Pig inches closer, hooves quiet in the dust.`,
      choices: [
        "Stay outside the gate and act disciplined",
        "Push the gate open halfway",
        "Push it open wide like you meant to"
      ],
      next: "c5"
    },

    c5: {
      title: "Chapter 5 — The Fuller Trough",
      text:
`The trough looks fuller than usual, like someone topped it off just for today.
The Pig’s stomach says: YES.
The Pig’s pride says: WAIT.

The Farmer rests a hand on the railing, patient.`,
      choices: [
        "Eat slowly and with dignity",
        "Eat fast before anyone notices",
        "Take a bite, then look straight at the Farmer"
      ],
      next: "c6"
    },

    c6: {
      title: "Chapter 6 — The Farmer’s Smile",
      text:
`The Farmer smiles like he’s reading a book and the Pig just turned the page he wanted.
Not mean. Not cruel.
Just… amused.

The Pig feels heat in his cheeks (which is impressive, for a pig).`,
      choices: [
        "Play it cool—pretend the smile means nothing",
        "Ham it up—do a little happy trot",
        "Test the Farmer—pause and wait for a reaction"
      ],
      next: "c7"
    },

    c7: {
      title: "Chapter 7 — A Routine Forms",
      text:
`Day turns into pattern.
Pattern turns into routine.
Routine turns into something the Pig calls “normal.”

The Farmer doesn’t change.
That’s what makes it dangerous.`,
      choices: [
        "Break the routine on purpose",
        "Follow the routine because it’s easy",
        "Improve the routine so it feels like your idea"
      ],
      next: "c8"
    },

    c8: {
      title: "Chapter 8 — The Bell Rope",
      text:
`A bell rope hangs near the barn.
The Pig notices it’s freshly tied, neat as a bow.

The Farmer looks away, like he’s not watching.
Which means he definitely is.`,
      choices: [
        "Don’t touch the rope. Not even once.",
        "Tug the rope lightly—just to hear it",
        "Yank the rope like you’re calling a parade"
      ],
      next: "c9"
    },

    c9: {
      title: "Chapter 9 — The Sound Carries",
      text:
`The bell sound carries across the yard.
Other animals glance over.
The Pig suddenly remembers he has an audience.

The Farmer stays still, like a statue that can blink.`,
      choices: [
        "Act like you meant to do that",
        "Pretend it was an accident",
        "Bow dramatically to imaginary applause"
      ],
      next: "c10"
    },

    c10: {
      title: "Chapter 10 — The Farmer’s Notebook",
      text:
`The Farmer flips open a small notebook.
He writes something, then closes it.

The Pig can’t read words, but he can read vibes.
And the vibe says: “Score kept.”`,
      choices: [
        "Stop caring about the notebook",
        "Try to peek at the page",
        "Offer a performance worth writing down"
      ],
      next: "c11"
    },

    c11: {
      title: "Chapter 11 — The Barn Door",
      text:
`The barn door is half open now.
Inside is shadow, hay, and the faint smell of something important.

The Farmer taps the fence again, slow and sure.`,
      choices: [
        "Stay in the sunlight where it’s safe",
        "Step inside just far enough to see",
        "Go in like you belong there"
      ],
      next: "c12"
    },

    c12: {
      title: "Chapter 12 — The Mirror Bucket",
      text:
`In the barn is a bucket so polished it acts like a mirror.
The Pig sees himself: mud-speckled, eyes bright, smile too eager.

The Farmer’s reflection appears behind him—closer than expected.`,
      choices: [
        "Turn around slowly and keep your composure",
        "Look away from the mirror and focus on the exit",
        "Grin at your reflection like it’s a trophy"
      ],
      next: "c13"
    },

    c13: {
      title: "Chapter 13 — The Wordless Offer",
      text:
`The Farmer doesn’t speak.
He simply holds out the ladle—like a handshake made of wood.

The Pig understands: this is the part where choices feel “voluntary.”`,
      choices: [
        "Refuse politely and step back",
        "Accept the ladle and hold it proudly",
        "Take the ladle and do something dramatic"
      ],
      next: "c14"
    },

    c14: {
      title: "Chapter 14 — The Habit Leash",
      text:
`It isn’t a leash you can see.
It’s a leash made of habit.
The Farmer doesn’t pull it.
The Pig does.

And somehow that’s worse.`,
      choices: [
        "Name the habit out loud (to yourself)",
        "Laugh it off and keep going",
        "Try to do the opposite of what you want"
      ],
      next: "c15"
    },

    c15: {
      title: "Chapter 15 — The Yard Shrinks",
      text:
`The same yard looks smaller today.
Not because it shrank—
because the Pig’s world has been orbiting the Farmer for a while now.

The Farmer scratches the fence rail, patient as ever.`,
      choices: [
        "Explore the far corner of the yard",
        "Stay near the Farmer because it’s familiar",
        "Make a bold move to reclaim your ‘freedom’"
      ],
      next: "c16"
    },

    c16: {
      title: "Chapter 16 — “Show Me”",
      text:
`The Farmer finally speaks, soft and simple:
“Show me.”

No explanation. No instructions.
Just two words that make the Pig’s heart thump.`,
      choices: [
        "Ask: “Show you what?”",
        "Show confidence first—questions later",
        "Act unimpressed (even if you’re not)"
      ],
      next: "c17"
    },

    c17: {
      title: "Chapter 17 — The Crowd Returns",
      text:
`The rooster is back.
So are the goats.
Even the cat appears, bored and judgmental.

The Pig senses it: a moment.
A stage.
A choice that will be remembered.`,
      choices: [
        "Do something small and controlled",
        "Do something big and showy",
        "Do something weird and unpredictable"
      ],
      next: "c18"
    },

    c18: {
      title: "Chapter 18 — The Nod",
      text:
`The Farmer nods once.
That single nod lands like a medal.

The Pig feels an old truth: approval can be its own kind of currency.`,
      choices: [
        "Take the nod and walk away satisfied",
        "Chase a bigger nod",
        "Pretend you don’t care… and chase it anyway"
      ],
      next: "c19"
    },

    c19: {
      title: "Chapter 19 — The Ledger Page",
      text:
`The notebook returns.
The Farmer flips to a page filled with marks—lines, tallies, little symbols.

The Pig realizes the Farmer has been tracking everything.
Not just actions. Patterns.`,
      choices: [
        "Decide to stop feeding the pattern",
        "Decide to embrace the pattern fully",
        "Decide to rewrite the pattern with one bold move"
      ],
      next: "c20"
    },

    c20: {
      title: "Chapter 20 — The Choice",
      text:
`The Farmer opens the gate again.
Not latched. Not locked.

The Pig understands the secret:
The Farmer never took anything.
The Pig always offered.

And the story continues… because it’s a story about choosing.`,
      choices: [
        "Walk away and end the loop",
        "Step closer and accept the routine",
        "Look the Farmer in the eye and choose anyway"
      ],
      next: "c1"
    }
  }
};
