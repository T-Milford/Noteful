import React, { Component } from 'react';
import STORE from './STORE';
import Link from 'react-router-dom';
import DisplayFolders from './DisplayFolders';

class DisplayNotes extends React.Component {
    render() {
        const notesList = STORE.filter(item =>
            notes.id  == folders.id
            )
       console.log(noteslist)
        return(
            {notesList}
            
        );
    }
}

export default DisplayNotes;
