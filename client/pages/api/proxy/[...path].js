import { createProxyMiddleware } from 'http-proxy-middleware';

const services = {
  'user': '8000',
  'product': '8001',
  'category': '8002',
  'cart': '8003',
  'order': '8004',
  'statistic': '8005',
  'theme': '8006'
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const serviceName = req.query.path[0];
  const port = services[serviceName];

  if (port) {
    const proxy = createProxyMiddleware({
      target: `http://localhost:${port}`,
      changeOrigin: true,
      cookieDomainRewrite: 'localhost',
      pathRewrite: { [`^/api/proxy/${serviceName}`]: `/api/${serviceName}` },
      logLevel: 'debug',
    });

    if (req.method === 'OPTIONS') {
      // Pre-flight request. Reply successfully:
      res.end();
      return;
    }

    proxy(req, res, (result) => {
      if (result instanceof Error) {
        throw result;
      }

      throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`);
    });
  } else {
    res.status(404).json({ message: 'Service not found' });
  }
}
