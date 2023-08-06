interface ProductProps {
    params: {
        product_num: String;
    };
}

export default function Products({ params: { product_num } }: ProductProps) {
    return <h1>APPLES</h1>;
}
