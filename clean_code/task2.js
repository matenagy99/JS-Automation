const speakers = [{id: 1, name: "John"},
                  {id: 2, name: "Chris"}]; // [{id: szám name: string}]
const talks = [{id: 1, speaker: 2}, {id: 2, speaker: 1},
               {id: 3, speaker: 2}, {id: 4, speaker: ""}, 
               {id: 5, speaker: 2}];  // [{id: szám, speaker: speakers.id}]
const events = [{id: 1, talks: [1, 3, 4]},
                {id: 2, talks: [2]},
                {id: 3, talks: [1, 5]}];  // [{id: szám, talks: [talks-id-k]}]


var i;
for (i = 0; i < speakers.length; ++i) {
    var speaker = speakers[i];
    speaker.talks = 0;
 
    var j, o = [];
    for (j = 0; j < talks.length; ++j) {
        if (talks[j].speaker == speaker.id) {
            o[o.length] = talks[j];
        }
    }

    console.log(o);

    for (j = 0; i < o.length; ++j) {
        var n, k;
        n = 0;
        console.log(o[j]);
        for (k = 0; k < events.length; ++k) {
            if (events[k].talks.indexOf(o[j].id) != -1) {
               n++;
            }
        }
        o[j].talks = o[j].talks + n;
    }
}


// speakers.map()

// function
/*for (let i = 0; i < speakers.length; ++i) {
    
    let hasSpeaker = talks.filter(item => {
        if (item.speaker === speakers[i].id) {
            return item;
        }
    });
    
    for (let j = 0; j < hasSpeaker.length; ++j) {
        for (let k = 0; k < events.length; ++k) {
            if (events[k].talks.indexOf(hasSpeaker[j].id) !== -1) {
                hasSpeaker[j].talks++;
            }
        }
    }
}*/

