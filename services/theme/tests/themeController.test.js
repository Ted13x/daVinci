import request from 'supertest';
import app from '../server'; 

describe('Theme Controller', () => {
  it('should get all themes', async () => {
    const res = await request(app)
      .get('/api/theme')
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('themes');
  });
});
