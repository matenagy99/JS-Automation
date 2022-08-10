const speakers = [{id: 1, name: "John"},
                  {id: 2, name: "Chris"}]; 
const talks = [{id: 1, speaker: 2}, {id: 2, speaker: 1},
               {id: 3, speaker: 2}, {id: 4, speaker: ""}, 
               {id: 5, speaker: 2}]; 
const events = [{id: 1, talks: [1, 3, 4]},
                {id: 2, talks: [2]},
                {id: 3, talks: [1, 5, 2]}];


let hasSpeaker = talks.filter((talk) => {
    if (typeof talk.speaker === "number") {
        return talk
    }
});

hasSpeaker.forEach((talk) => {
    talk.talks = 0;
    events.forEach((event) => {
        if (event.talks.indexOf(talk.id) !== -1) {
            talk.talks++;
        }
    });
}); // ezt nem tudom mennyre elegáns

// összesíti, hogy az adott talk hányszor fordul elő az eventek között
console.log(hasSpeaker);

