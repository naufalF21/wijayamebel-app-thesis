import { NextResponse } from 'next/server';
import advantages from '@/data/advantages.json';

// To handle a GET request to /api
export async function GET() {
	// Do whatever you want
	return NextResponse.json(advantages, { status: 200 });
}
