import * as assert from 'assert';

import { selectColumn } from '../src/extension';

describe('When first editor is active', () => {
    const activeGroup = 1;

    for (let column = 1; column <= 3; column += 1) {
        it(`should return "next" if total number of editors equals ${column}`, () => {
            assert.equal('next', selectColumn(activeGroup, column));
        });
    }
});

describe('When second editor is active', () => {
    const activeGroup = 2;

    it('should return "prev" if total number of editors equals 2', () => {
        assert.equal('prev', selectColumn(activeGroup, 2));
    });

    it('should return "next" if total number of editors equals 3', () => {
        assert.equal('next', selectColumn(activeGroup, 3));
    });
});

describe('When third editor is active', () => {
    const activeGroup = 3;
    
    it('should return "prev" if total number of editors equals 3', () => {
        assert.equal('prev', selectColumn(activeGroup, 3));
    });
});
