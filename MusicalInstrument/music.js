class Note {
    constructor(name, pitch){
        this.name = name;
        this.pitch = (pitch < 8 && pitch > 0) ? pitch : null;
    }
    show(){
        console.log("Note: ", this.name);
        console.log("Pitch: ", this.pitch);
    }    
}

class Instrument extends Note {
    constructor (name, pitch){
        super(name, pitch);
        this.record = [[this.name, this.pitch]];
        //console.log(this.record);
    }
    addNote(newNote, newPitch){
        this.newNote = newNote;
        this.newPitch = newPitch;
        this.record.push([this.newNote, this.newPitch]);
        //console.log(this.record);
    }
    removeLastNote(){
        this.record.pop();
        //console.log(this.record);
    }
    changeNote(index, note, pitch){
        this.index = index;
        this.note = note;
        this.pitch = pitch;
        this.record[index] = [this.note, this.pitch];
        //console.log(this.record);
    }
    shuffleRecord(){
        var m = this.record.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this.record[m];
            this.record[m] = this.record[i];
            this.record[i] = t;
            
        }
        console.log(this.record);
    }
    autoCompose(num){
        this.record = [];
        console.log(this.record);
        for(let i=0; i<num; i++){
            this.noteName = ["do", "re", "mi", "fa", "so", "la", "ti", "do"];
            this.pitch =  Math.floor(Math.random() * 8);
            this.record.push([this.noteName[this.pitch], this.pitch]);
        }
        console.log(this.record);
    }
}
class Piano extends Instrument{
    constructor(name, pitch, brand, model, color){
        super(name, pitch);
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
}
class Xylophone extends Instrument{
    constructor(name, pitch, brand, model, color){
        super(name, pitch);
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
}

const note_names = ["do", "re", "mi", "fa", "so", "la", "ti"];
// const note = new Note("do", 1);
// note.show();

const instrument = new Instrument("do", 1);
instrument.addNote("re", 2);
instrument.addNote("mi", 3);
instrument.addNote("fa", 4);
instrument.addNote("so", 5);
instrument.addNote("la", 6);
//instrument.removeLastNote();
//instrument.changeNote(1, "mi", 3);
instrument.shuffleRecord();
instrument.autoCompose(5);

document.addEventListener('DOMContentLoaded', function() {
    // Piano
    let pianoIDs = ["do", "re", "mi", "fa", "sol", "la", "ti"];
    let keys = [1, 2, 3, 4, 5, 6, 7];

    // Xylophone
    let xyloIDs = [1, 2, 3, 4, 5, 6, 7];
    let xyloKeys = ["xylo1", "xylo2", "xylo3", "xylo4", "xylo5", "xylo6", "xylo7"];

    for(let index=0; index<7; index++){
        keys[index+1] = document.getElementById(pianoIDs[index]); 
        xyloKeys["xylo"+(index+1)] =  document.getElementById(xyloIDs[index]);
    }

    // Piano
    var ul = document.getElementById('keyboard');  // Parent
    ul.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI'){
        keys[e.target.id].play();
        }
    });

    // Xylo
    var ul = document.getElementById('xylo');  
    ul.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI'){
        xyloKeys[e.target.id].play();
        }
    });    
});