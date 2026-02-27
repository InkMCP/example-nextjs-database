import { NextResponse } from 'next/server';

export async function GET() {
  const db = require('../../../lib/db');
  const items = db.prepare('SELECT * FROM items ORDER BY created_at DESC').all();
  return NextResponse.json(items);
}

export async function POST(request) {
  const db = require('../../../lib/db');
  const { name } = await request.json();

  if (!name || !name.trim()) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }

  const stmt = db.prepare('INSERT INTO items (name) VALUES (?)');
  const result = stmt.run(name.trim());

  return NextResponse.json({ id: result.lastInsertRowid, name: name.trim() }, { status: 201 });
}
