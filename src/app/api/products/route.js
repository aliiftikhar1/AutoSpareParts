import { NextResponse } from 'next/server';
import prisma from '../../util/prisma';

export async function POST(request) {
  try {
    const {
      name,
      slug,
      richDescription,
      price,
      stock,
      subcategorySlug,
      colors,
      sizes,
      discount,
      isTopRated,
      images,
      meta_title,
      meta_description,
      meta_keywords,
      makeId,
      modelId,
      yearId,
    } = await request.json();

    // Validate required fields
    if (!name || !slug || !richDescription || !price || stock === undefined || !subcategorySlug) {
      return NextResponse.json(
        {
          status: false,
          message: "Missing required fields.",
        },
        { status: 400 }
      );
    }

    // Check for existing product with the same slug
    const existingProduct = await prisma.product.findUnique({
      where: { slug },
    });
    if (existingProduct) {
      return NextResponse.json(
        {
          status: false,
          message: "Product with this slug already exists.",
        },
        { status: 400 }
      );
    }

    // Handle image URLs (assumes images is an array of file paths)
    const imageUrls = Array.isArray(images) ? images : [images];
    const imageData = {
      create: imageUrls.map((url) => ({ url })),
    };

    // Create new product with associated data
    const newProduct = await prisma.product.create({
      data: {
        name,
        slug,
        description: richDescription,
        price: parseFloat(price),
        stock: parseInt(stock, 10),
        subcategory: { connect: { slug: subcategorySlug } },
        colors: colors ? JSON.stringify(colors) : null,
        sizes: sizes ? JSON.stringify(colors) : null,
        discount: discount ? parseFloat(discount) : null,
        isTopRated: Boolean(isTopRated),
        images: imageData,
        meta_title,
        meta_description,
        meta_keywords,
        make: makeId ? { connect: { id: makeId } } : undefined,
        model: modelId ? { connect: { id: modelId } } : undefined,
        year: yearId ? { connect: { id: yearId } } : undefined,
      },
      include: {
        images: true,
      },
    });

    return NextResponse.json(
      {
        status: true,
        message: 'Product created successfully',
        data: newProduct,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      {
        message: 'Failed to create product',
        status: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        images: true,
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.log('Error fetching products:', error);
    return NextResponse.json(
      { message: 'Failed to fetch products', error: error.message },
      { status: 500 }
    );
  }
}
