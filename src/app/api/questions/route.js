import { NextResponse } from 'next/server';
import questions from '@/data/questions.json';

// To handle a GET request to /api
export async function GET() {
	// Do whatever you want
	return NextResponse.json(questions, { status: 200 });
}
