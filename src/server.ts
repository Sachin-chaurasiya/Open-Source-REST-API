import jsonServer from 'json-server';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimiter } from './middleware/ratelimit';
import getRoutes from './routes';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(getRoutes());

// Serve static files from the public directory
const publicPath = path.join(process.cwd(), 'public');

server.use(cors());
server.use(helmet());
server.use(jsonServer.defaults({ static: publicPath }));
server.use(jsonServer.bodyParser);
server.use(rateLimiter);
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
