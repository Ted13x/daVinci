import request from 'supertest';
import app from '../server'; 

describe('Order Controller', () => {
  it('should get all orders', async () => {
    const res = await request(app)
      .get('/api/order')
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('orders');
  });
});
