import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      name,
      email,
      phone,
      location,
      experience
    } = data;

    // Basic validation
    if (!name || !email || !phone || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO dealer_applications (
        name,
        email,
        phone,
        location,
        experience
      ) VALUES ($1, $2, $3, $4, $5)
      RETURNING id;
    `;
    
    const values = [
      name,
      email,
      phone,
      location,
      experience || ''
    ];

    const result = await pool.query(query, values);
    
    return NextResponse.json({
      success: true,
      message: 'Dealer application submitted successfully',
      id: result.rows[0].id
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error saving dealer application:', error);
    return NextResponse.json(
      { error: 'Internal server error while saving data' },
      { status: 500 }
    );
  }
}
