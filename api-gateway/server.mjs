import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gateway from 'express-gateway';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

gateway()
  .load(join(__dirname, 'config'))
  .run();
