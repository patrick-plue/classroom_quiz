'use client';
import Status from '../ui/status';
import Question from '../ui/question';
import Answer from '../ui/answer';

import { useState } from 'react';
function Game() {
    return (
        <div>
            <Status />
            Game
            <Question />
            <Answer text='myFirstPerson:name' />
            <Answer text='myFirstPerson.name' />
            <Answer text='myFirstPerson[3]' />
            <Answer text='myFirstPerson-name' />
        </div>
    );
}

export default Game;
