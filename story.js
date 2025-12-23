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
`The Pig spots his Alpha leaning on the fence, calm as a sunset.
No shouting. No chasing. Just that steady look—like the Alpha already knows what the Pig will do next.

The Pig tells himself: “I’m free.”
The Alpha doesn’t argue. He just waits.`,
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
`Near the gate sits a 3 inch black belt with a gold buckle resting inside.
It wasn’t there yesterday. The Pig is sure of it.

The Alpha taps the fence twice.
Not a suggestion more like a command.`,
      choices: [
        "Ignore the belt and sniff the grass",
        "Open the gate and peek inside",
        "Nudge the belt toward the Alpha with your snout"
      ],
      next: "c3"
    },

    c3: {
      title: "Chapter 3 — The Quiet Deal",
      text:
`The Pig remembers old rules: if you don’t look at the belt, it can’t matter.
But the Alpha's silence is loud. The pig knows he needs to satisfy Alpha's need to drain first.

The barn door creaks in the distance.
Somewhere, another pay pig laughs like he’s in on the joke.`,
      choices: [
        "Make a new rule: “Only one tiny favor”",
        "Ask (in pig language) what the Alpha wants",
        "Do the favor first—then ask questions"
      ],
      next: "c4"
    },

    c4: {
      title: "Chapter 4 — The Unlatched Gate",
      text:
`The gate is closed… but not latched.
That’s the thing about the Alpha: he doesn’t trap.
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

The Alpha rests a hand on the railing, patient.`,
      choices: [
        "Eat slowly and with dignity",
        "Eat fast before anyone notices",
        "Pay first then ask if you can eat"
      ],
      next: "c6"
    },

    c6: {
      title: "Chapter 6 — The Alpha’s Smile",
      text:
`The Alpha smiles like he’s reading a book and the Pig just turned the page he wanted.
Not mean. Not cruel.
Just… evil.

The Pig feels heat in his cheeks (which is impressive, for a pig).`,
      choices: [
        "Play it cool—pretend the smile means nothing",
        "Ham it up—do a little happy trot",
        "Test the Alpha—pause and wait for a reaction"
      ],
      next: "c7"
    },

    c7: {
      title: "Chapter 7 — A Routine Forms",
      text:
`Day turns into pattern.
Pattern turns into routine.
Routine turns into something the Pig calls “normal.”

The Alpha doesn’t change.
That’s what makes it dangerous.`,
      choices: [
        "Break the routine on purpose",
        "Follow the routine because it’s easy",
        "Keep giving to prove your worth for all time"
      ],
      next: "c8"
    },

    c8: {
      title: "Chapter 8 — The Sling",
      text:
`A sling hangs near the barn.
The Pig notices it’s freshly installed, neat as a bow.

The Alpa looks away, like he’s not watching.
Which means he definitely is.`,
      choices: [
        "climb in like the pig you are.",
        "Stand near it oinking feverishly",
        "stand and wait for Alpha to give diection"
      ],
      next: "c9"
    },

    c9: {
      title: "Chapter 9 — Eyes Wide shut",
      text:
`Suddenly across the yard.
Other cash pigs glance over.
The Pig suddenly remembers he has an audience.

The Alpha stays still, like a statue that can blink.`,
      choices: [
        "Bare yourself for all to see",
        "Act like you don't know what is going on, play it coy",
        "Bow dramatically to imaginary applause"
      ],
      next: "c10"
    },

    c10: {
      title: "Chapter 10 — The Alpha’s Notebook",
      text:
`The Alpha flips open a small notebook.
He writes something, then closes it.

The Pig can’t read words, but he can read vibes.
And the vibe says: “Score kept.”`,
      choices: [
        "Stop caring about the notebook",
        "Try to peek at the page",
        "Offer a cash drain worth writing down"
      ],
      next: "c11"
    },

    c11: {
      title: "Chapter 11 — The Barn Door",
      text:
`The barn door is half open now.
Inside is shadow, hay, and the faint smell of something important.

The Alpha taps the fence again, slow and sure.`,
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
`In the barn is a toilet seat devoid of a bowl so perfectly placed the pig knows qwhere he belongs..
The Pig sees himself: mud-speckled, eyes bright, smile too eager.

The Alpha’s reflection appears behind him—closer than expected.`,
      choices: [
        "Turn around slowly and keep your composure",
        "Look away from the seat and focus on the exit",
        "Grin at the seat like it’s a trophy"
      ],
      next: "c13"
    },

    c13: {
      title: "Chapter 13 — The Wordless Offer",
      text:
`The Alpha doesn’t speak.
He simply points to the seat and expects you to know your role in all of this.

The Pig understands: this is the part where choices feel “voluntary.”`,
      choices: [
        "Refuse politely and step back",
        "Accept your fate and hold it proudly",
        "Send your Alpha cash before accepting your gift"
      ],
      next: "c14"
    },

    c14: {
      title: "Chapter 14 — The Habit Leash",
      text:
`It isn’t a leash you can see.
It’s a leash made of habit.
The Alpha doesn’t pull it.
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
because the Pig’s world has been orbiting the Alpha for a while now.

The Alpha scratches the fence rail, patient as ever.`,
      choices: [
        "Explore the far corner of the yard",
        "Stay near the Alpha because it’s familiar",
        "Make a bold move to reclaim your ‘freedom’"
      ],
      next: "c16"
    },

    c16: {
      title: "Chapter 16 — “Show Me”",
      text:
`The Alpha finally speaks, soft and simple:
“Show me.”

No explanation. No instructions.
Just two words that make the Pig’s heart thump.`,
      choices: [
        "Send the large amount and show Alpha the reciept",
        "Present your pig ass for belt lashes",
        "Tell Alpha to Take More"
      ],
      next: "c17"
    },

    c17: {
      title: "Chapter 17 — The Crowd Returns",
      text:
`The cash pigs are back.
So are the faggots.
Even the bear appears, bored and judgmental.

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
`The Alpha nods once.
That single nod lands like a medal.

The Pig feels an old truth: approval can be its own kind of currency.`,
      choices: [
        "Take the nod and send to Alpha plus a tip satisfied",
        "Chase a bigger nod",
        "Pretend you don’t care… and chase it anyway"
      ],
      next: "c19"
    },

    c19: {
      title: "Chapter 19 — The Ledger Page",
      text:
`The notebook returns.
The Alpha flips to a page filled with marks—lines, tallies, little symbols.

The Pig realizes the Alpha has been tracking everything.
Not just actions. Arunning score of money owed.`,
      choices: [
        "Grin with glee and say Just one more time Alpha",
        "Tell Alpha you're hard as fuck thinking about his running ledger",
        "Sniff your popper and get ready to send"
      ],
      next: "c20"
    },

    c20: {
      title: "Chapter 20 — The So-Called Choice",
      text:
`The Alpha stands there, arms crossed.
No words, just an evil smile.

The Pig understands the secret:
The Alpha never took anything.
The Pig always offered.

And the story continues… because it’s a story about you being a filthy cash pig who loves paying.`,
      choices: [
        "Cum as you realize what a pig you are as you send",
        "Send Alpha his dues and then cum later realzing how hard you've been drained",
        "Look the Alpha in the eye and Send with a 25% tip"
      ],
      next: "c1"
    }
  }
};
