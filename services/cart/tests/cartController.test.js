import request from 'supertest';
import app from '../server'; 

describe('Cart Controller', () => {
  it('should get all carts', async () => {
    const res = await request(app)
      .get('/api/cart')
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('cart');
  });
});
