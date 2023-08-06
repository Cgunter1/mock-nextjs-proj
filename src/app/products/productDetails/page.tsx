"use client";

import { useSearchParams } from "next/navigation";

export default function Products() {
    const searchParams = useSearchParams();
    const product_num = searchParams?.get("productId");
    return <h1>Product Details of {product_num}</h1>;
}
