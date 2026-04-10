import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      name,
      email,
      phone,
      plan_id,
      plan_name,
      base_price,
      discount,
      subtotal,
      gst,
      total,
      promo_code
    } = data;

    // Basic validation
    if (!name || !email || !phone || !plan_id) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO checkout_leads (
        name,
        email,
        phone,
        plan_id,
        plan_name,
        base_price,
        discount,
        subtotal,
        gst,
        total,
        promo_code
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING id;
    `;
    
    const values = [
      name,
      email,
      phone,
      plan_id,
      plan_name,
      base_price,
      discount,
      subtotal,
      gst,
      total,
      promo_code || null
    ];

    const result = await pool.query(query, values);
    
    return NextResponse.json({
      success: true,
      message: 'Checkout data saved successfully',
      id: result.rows[0].id
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error saving checkout data:', error);
    return NextResponse.json(
      { error: 'Internal server error while saving data' },
      { status: 500 }
    );
  }
}
