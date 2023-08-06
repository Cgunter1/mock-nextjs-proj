import Link from "next/link";

export default function Products() {
    const products = [1, 2, 3];
    return (
        <ol>
            {products.map(num => (
                <li key={num}>
                    {" "}
                    <Link
                        href={`/products/${num}`}
                        data-testid={`Product Link ${num}`}
                    >
                        {" "}
                        Product {num}
                    </Link>
                </li>
            ))}
        </ol>
    );
}
