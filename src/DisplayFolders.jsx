import React, { Component } from 'react';
import STORE from './STORE';
import { Link } from 'react-router-dom'


class DisplayFolders extends React.Component {
    render() {
        const FoldersList = STORE.folders.map(folder => 
            <li className='each_folder' 
                key={folder.id}>
                <Link to={`/folders/${folder.id}`}>
                    {folder.name}
                </Link>
            </li>
            )
        
        return (
            <>
                <ul className='folders_list'>
                    {FoldersList}
                </ul>
            </>
        );
    }
}

export default DisplayFolders;