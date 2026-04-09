import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  iterations: 1,
};

const BASE_URL = 'http://localhost:80';

export default function () {
  const res = http.get(`${BASE_URL}/`);
  check(res, {
    'GET / status 200': (r) => r.status === 200,
  });
  sleep(1);
}
