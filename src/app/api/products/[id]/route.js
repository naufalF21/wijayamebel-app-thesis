import { NextResponse } from 'next/server';
import prisma from '../../../../../prisma/client';

export async function GET(request, { params }) {
	const id = parseInt(params.id);

	const product = await prisma.product.findUnique({
		where: {
			id,
		},
	});

	if (!product) {
		return NextResponse.json(
			{
				success: true,
				message: 'Detail Data Product Not Found!',
				data: null,
			},
			{ status: 404 }
		);
	}

	return NextResponse.json(
		{
			success: true,
			message: 'Detail Data Product',
			data: product,
		},
		{ status: 200 }
	);
}
