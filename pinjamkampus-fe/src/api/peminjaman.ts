const BASE_URL = 'http://localhost:8080';

export async function getBorrowings(query = '') {
  const res = await fetch(`${BASE_URL}/peminjaman${query}`);
  if (!res.ok) throw res; 
  return res.json();
}

export async function createBorrowing(data: any) {
  try {
    const res = await fetch(`${BASE_URL}/peminjaman`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    // Jika ada error dari server (400, 404, 409)
    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.error); 
    }
    
    return await res.json();
  } catch (error: any) {
    throw new Error(error.message === 'Failed to fetch' ? 'Gagal menghubungi server' : error.message);
  }
}

export async function updateBorrowing(id: string, data: any) {
    try {
      const res = await fetch(`${BASE_URL}/peminjaman/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error);
      }
      return await res.json();
    } catch (error: any) {
      throw new Error(error.message === 'Failed to fetch' ? 'Gagal menghubungi server' : error.message);
    }

}

export async function deleteBorrowing(id: number) {
  const res = await fetch(`${BASE_URL}/peminjaman/${id}`, { method: 'DELETE' });
  // Endpoint DELETE mengembalikan 204 tanpa body JSON
  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.error);
  }
}