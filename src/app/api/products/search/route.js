import { NextResponse } from 'next/server';
import prisma from '../../../util/prisma';

export async function POST(request) {
  try {
    // Parse request body
    const { subcategory, make, model, year } = await request.json();

    // Build filters
    const filters = {};

    if (subcategory && subcategory !== 'Any') {
      filters.subcategorySlug = subcategory;
    }
    if (make && make !== 'Any') {
      filters.makeId = parseInt(make, 10);
    }
    if (model && model !== 'Any') {
      filters.modelId = parseInt(model, 10);
    }
    if (year && year !== 'Any') {
      filters.yearId = parseInt(year, 10);
    }

    // Fetch products using Prisma with the filters
    const products = await prisma.product.findMany({
      where: filters,
      include: {
        images: true, // Include images if necessary
        make: true,   // Include make relation
        model: true,  // Include model relation
        year: true,   // Include year relation
      },
    });

    // Format the response if needed
    const formattedProducts = products.map((product) => ({
      ...product,
      images: product.images.map((img) => img.url), // Extract image URLs
    }));

    return NextResponse.json(
      { data: formattedProducts, status: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { message: 'Failed to fetch products', error: error.message, status: false },
      { status: 500 }
    );
  }
}
