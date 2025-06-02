import { Router } from 'express';

import { PRODUCTS, USERS } from './mock-data';

const router: Router = Router();

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

router.get('/users', async (req, res) => {
  await delay(1000);

  res.json(USERS);
});

router.get('/products', async (req, res) => {
  await delay(1000);

  res.json(PRODUCTS);
});

export default router;
