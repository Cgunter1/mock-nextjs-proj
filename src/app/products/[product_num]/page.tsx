import Link from "next/link";

interface ProductProps {
    params: {
        product_num: String;
    };
}

export default function Products({ params: { product_num } }: ProductProps) {
    return <h1>Patient Details of {product_num}</h1>;
}
