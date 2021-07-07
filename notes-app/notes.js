const chalk = require("chalk");
const fs = require("fs");

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log(chalk.green.bold.inverse("New note added!"));
    } else {
        console.log(chalk.red.bold.inverse("Note title taken!"));
    }
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.bold.inverse("Note removed!"));
    } else {
        console.log(chalk.red.bold.inverse("No note found!"));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.yellow.bold.inverse("Your notes"));
    notes.forEach((note) => {
        console.log(note.title);
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);
    if (!noteToRead) {
        console.log(chalk.red.bold.inverse("No note found!"));
    } else {
        console.log(chalk.blue.bold.inverse(noteToRead.title));
        console.log(noteToRead.body);
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};
