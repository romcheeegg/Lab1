import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 5 },
    { duration: '30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

const BASE_URL = 'http://localhost:80';

export default function () {
  const res = http.get(`${BASE_URL}/`);
  check(res, {
    'GET / status 200': (r) => r.status === 200,
  });
  sleep(1);
}
