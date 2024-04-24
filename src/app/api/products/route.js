import { NextResponse } from 'next/server';
import products from '@/data/products.json';

// To handle a GET request to /api
export async function GET() {
	// Do whatever you want
	return NextResponse.json(products, { status: 200 });
}
