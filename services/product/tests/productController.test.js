import request from 'supertest';
import app from '../server'; 

describe('Product Controller', () => {
  it('should get all products', async () => {
    const res = await request(app)
      .get('/api/products')
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('products');
  });
});
