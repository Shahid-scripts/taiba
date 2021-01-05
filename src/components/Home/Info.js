import { Link } from 'gatsby'
import React from 'react'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
            <Title title="our story" /> 
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem100 fddjsh dsjhfjdhs dsjhs Lorem100skkal jdafjkh kdjfhshkjsdhfkjhkdnvkjijbvkbibvkxbcvbkd hvijsfn vjxivjnsjbvibkxzbib hf vhnijfv nv kjvjbbsk bvbkkjbvf xkcvjh jivhjnskfdnvijh cvijsnvj vbbvi cbvbv xbcvbsbkbveb vsbvbvb svbsbv sbvbvj uuhjbvvbvbvh
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">about page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
            
    )
}
