// src/api/resources.ts
const BASE_URL = 'http://localhost:8080';

export async function getResources() {
  const res = await fetch(`${BASE_URL}/sumber-daya`);
  return res.json();
}

export async function createResource(data: { nama: string; jenis: string; stok: number }) {
  const res = await fetch(`${BASE_URL}/sumber-daya`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}