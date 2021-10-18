'use strict'

const app = require('../app.js');
const supertest = require('supertest');
const { expect, it } = require('@jest/globals');

//supertest can make mock http requests to an express exported at /app.js
const request = supertest(app);

describe('testing server', () => {
    it('should respond with a string on post /talk', async () => {
        let param = 'ok';
        let response = await request.post('/talk').send({
            words: param, 
        });
        expect(response.status).toBe(200);
        expect(typeof(response.text)).toBe('string');
        expect(response.text).toBe(param)
    });
    it('should respond with a string on get /repeat', async () => {
        let response = await request.get('/repeat');
        expect(response.status).toBe(200);
        expect(typeof response.text).toBe('string');
    });
});