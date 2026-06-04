import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { TillProduct } from "../components/tillProduct";
import { Info } from "../components/info";
import { Review } from "../components/review";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [info, setInfo] = useState(null);
    const [review, setReview] = useState(null);

    useEffect(() => {
        import("../data/products").then(module => {
            const pr = module.products.find(p => p.id === id);
            setProduct(pr);
            const inf = module.infos.find(p => p.id === id);
            setInfo(inf);
            const re = module.reviews.find(p => p.id === id);
            setReview(re);
        });
    }, [id]);

    if (!product) {
        return <p style={{ textAlign: 'center', marginTop: '4rem', fontSize: '18px' }}>Loading Collection Item...</p>;
    }

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '60px' }}>
            <TillProduct product={product} />
            {info && <Info info={info} />}
            {review && <Review review={review} />}
        </div>
    );
}