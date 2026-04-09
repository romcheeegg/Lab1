import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '15s', target: 25 },
    { duration: '15s', target: 40 },
    { duration: '15s', target: 0 },
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
