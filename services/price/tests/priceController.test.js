import request from 'supertest';
import app from '../server'; 

describe('Price Controller', () => {
  it('should get all prices', async () => {
    const res = await request(app)
      .get('/api/price')
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('prices');
  });
});
