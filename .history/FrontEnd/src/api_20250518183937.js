import { getToken } from '@clerk/clerk-react';

export async function fetchRooms() {
  const token = await getToken();
  const res = await fetch('http://localhost:4000/api/rooms', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Failed to fetch rooms');
  return res.json();
}

export async function addRoom(roomData) {
  const token = await getToken();
  const res = await fetch('http://localhost:4000/api/rooms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(roomData),
  });
  if (!res.ok) throw new Error('Failed to add room');
  return res.json();
}
