// pages/api/search.js
import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';

export async function GET(req) {
	const { searchParams } = new URL(req.url);
	const query = searchParams.get('query');

	// All posts that contain the word 'cat'.
	const products = await prisma.product.findMany({
		where: {
			OR: [{ name: { contains: query } }, { category: { contains: query } }],
		},
	});

	const totalProducts = products.length;

	return NextResponse.json(
		{
			success: true,
			message: 'List Data Products',
			meta: {
				totalData: totalProducts,
			},
			data: products,
		},
		{
			status: 200,
		}
	);
}
