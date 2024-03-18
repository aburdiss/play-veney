# play-veney
Side project to implement Veney, aka Sword-Chess, aka https://veney.xyz/. It seems like a really interesting programming challenge. 

Project goals: 
* [ ] start by creating a _representation_ of Veney game states. I'd like it to be programming-language-independent, and interoperable, because I've got a buddy that knows JavaScript, and I do not. So a JSON file probably.
* [ ] Then, build software that can read and _visualize_ it. This does not require implementing any of the logic or rules, just reading in the JSON and showing the state.
* [ ] Next, I want to actually try and implement the really complicated logic of Veney, for fun! Concert moves, swapping moves, fending pieces, meta-moves, measure restrictions on range, etc. I'm planning to do it in Python but if we get the representation right it could be done in whatever.
* [ ] Play veney online!
* [ ] ???
* [ ] Reinforcement Learning environment!

Oh, and Veney is an [evolving game](https://veney.xyz/changelog), so all the above should be written for extensibility and flexibility if possible. 
