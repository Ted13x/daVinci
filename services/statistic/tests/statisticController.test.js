import request from 'supertest';
import app from '../server'; 

describe('Statistic Controller', () => {
  it('should get all statistics', async () => {
    const res = await request(app)
      .get('/api/statistic')
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('statistics');
  });
});
