import * as request from 'supertest';
import { ExpressRestApi } from '..';
import { after } from 'node:test';

describe('Auth Views', () => {
    let server : ExpressRestApi;
    let app

    beforeAll(async () => {
        server = new ExpressRestApi(3000);
        app = server.express
    });

    describe('POST /register/', () => {
        it('should register a new user', async () => {
            // Mock the request body
            const requestBody = {
                "name": "John Doe",
                "email" : "johndoe@example.com",
                "firstName" : "John",
                "lastName" : "Doe",
                "password" : "password123"
            }
            
            const response = await request(app)
                .post('/auth/register/')
                .send(requestBody);
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('_id');
            expect(response.body).toBeDefined();
        });
    });

    describe('POST /login/', () => {
        it('should log in a user', async () => {
            const requestBody = {
                email: 'testuser@email.com',
                password: 'testpassword',
            };

            const response = await request(app)
                .post('/auth/login/')
                .send(requestBody);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('token');
        });
    });
    afterAll(async () => {
    })

});

