// src/api/peminjaman.ts
const BASE_URL = 'http://localhost:8080';

export async function getBorrowings(query = '') {
  const res = await fetch(`${BASE_URL}/peminjaman${query}`);
  return res.json();
}

export async function createBorrowing(data: any) {
  const res = await fetch(`${BASE_URL}/peminjaman`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.status === 201 ? res.json() : Promise.reject(res);
}