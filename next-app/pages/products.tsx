    import { addProductToCart } from "../stores/cart";
    import { getProducts, type Product } from "../stores/products";
    import Link from "next/link";
    import { useEffect, useState } from "react";

    // const products = ref([] as Product[]);
    // getProducts().then( x=> products.value = x);

    const [products, setProducts] = useState([] as Product[]);
    useEffect(() => { getProducts().then( x=> setProducts(x.products)) }, []);
    

    const [search, setSearch] = useState("");

    function addToCart(product: Product) {
        // addProductToCart(product);
    }

export default function() {
    return (
        <div>
        <div className="control ">
            <input className="input" type="text" placeholder="Search" value={search} onChange={e=>setSearch(e.target.value)} />
        </div>

        <div className="products">
            { products
                .filter( product=>product.title.toLowerCase().includes(search?.toLowerCase() ))
                .map((product) => (
                <Link key={product.id} 
                            className={`product ${ isLoading ? 'is-disabled' : '' }`}
                            href={`/product/${product.id}`}>
                    <div className="product-image">
                        <img src={product.thumbnail} alt={product.title} />
                    </div>
                    <div className="product-info">
                        <b>{ product.title }</b>
                        <p>{ product.description }</p>
                        <button className={`button is-small is-primary is-rounded add ${ isLoading ? 'is-loading' : '' }`}
                                onClick={()=>setIsLoading(!isLoading)}>
                                    +
                        </button>
                        
                        <p className="price">
                            <span className="currency">$</span>
                            <span className="amount">{ product.price }</span>
                        </p>
                    </div>
                </Link>
            )}
        </div>
    </div>
    )
}    