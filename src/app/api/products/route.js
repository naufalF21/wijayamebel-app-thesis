import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';

// To handle a GET request to /api
export async function GET(req, res) {
	const { searchParams } = new URL(req.url);
	const page = parseInt(searchParams.get('page')) || 1;
	const limit = 12;

	const products = await prisma.product.findMany({
		skip: (page - 1) * limit,
		take: limit,
	});

	const totalProducts = await prisma.product.count();

	return NextResponse.json(
		{
			success: true,
			message: 'List Data Products',
			meta: {
				totalData: totalProducts,
				page,
				limit,
				totalPages: Math.ceil(totalProducts / limit),
			},
			data: products,
		},
		{
			status: 200,
		}
	);
}

export async function POST(request) {
	// get all request
	const { name, image, description, category } = await request.json();

	const product = await prisma.product.create({
		data: {
			name: name,
			image: image,
			description: description,
			category: category,
		},
	});

	return NextResponse.json(
		{
			success: true,
			message: 'Product Created Successfully',
			data: product,
		},
		{ status: 201 }
	);
}
