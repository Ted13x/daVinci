import request from 'supertest';
import app from '../server'; 

describe('user Controller', () => {
  it('should get all users', async () => {
    const res = await request(app)
      .get('/api/user')
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
  });
});
