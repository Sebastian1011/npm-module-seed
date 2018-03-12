'use strict'
import 'babel-polyfill';
import { expect } from 'chai';
import PathDrawer from '../dist/index';

describe('Say hello', ()=> {
    it('return hello', () => {
        const message = "hello";
        const pathDrawer = new PathDrawer(message);       
        const result = pathDrawer.hello();
        expect(result).to.equal(message);
    })
})