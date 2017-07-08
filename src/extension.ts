'use strict';

import { commands, window } from 'vscode';

interface Options {
    columnName?: string,
    columnNumber?: number,
}

export function activate() {
    // Function for registering a command
    const register = (commandName: string, options: Options) => {
        commands.registerCommand(`${commandName}`, () => cloneEditor(options));
    }
    
    // Register all commands
    register('cloneEditor.defaultGroup', { columnName: 'default' });
    register('cloneEditor.previousGroup', { columnName: 'prev' });
    register('cloneEditor.nextGroup', { columnName: 'next' });
    register('cloneEditor.firstGroup', { columnNumber: 1 });
    register('cloneEditor.secondGroup', { columnNumber: 2 });
    register('cloneEditor.thirdGroup', { columnNumber: 3 });
}

function cloneEditor(options?): void {
    // Import all VS Code related constants
    const { activeTextEditor: active, visibleTextEditors: visible } = window;
    const { document } = active;

    // Function for cloning document into specific column
    const cloneDocument = (column: number) => {
        window.showTextDocument(document, column, true);
    };

    // Check if specifc column number was passed
    if (options.hasOwnProperty('columnNumber')) {
        cloneDocument(options.columnNumber);
        return;
    }

    // Select column if specific name was not passed
    const targetColumnName = options.columnName === 'default' ? selectColumn(active.viewColumn, visible.length) : options.columnName;
    
    let targetColumnNumber:number = active.viewColumn;
    
    // Calculate number of target column
    if (targetColumnName === 'next') {
        targetColumnNumber += 1
    } else if (targetColumnName === 'prev') {
        targetColumnNumber -= 1
    }

    cloneDocument(targetColumnNumber)
}

// Function for selecting next or previous column
export function selectColumn(activeColumn:number, visibleCount:number) {
    const isActiveColumnSecondOfThree = visibleCount === 3 && activeColumn === 2;
    const selectNextColumn = activeColumn === 1 || isActiveColumnSecondOfThree;   
    return selectNextColumn ? 'next' : 'prev';
}

export function deactivate() {
    
}
