import React from 'react';
import './page-section-style.scss';

const PageSection = () =>{
    return (
        <section className="card text-white bg-primary mb-4">
            <div className="card-header">source</div>
            <div className="card-body">
            <h4 className="card-title">Article title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni hic, labore sint, iste quidem adipisci omnis nobis rerum inventore, fuga similique soluta quae. Aliquid pariatur at nulla quibusdam reiciendis iste quod atque voluptatum voluptates quas maiores tempore, magnam nobis exercitationem assumenda quos temporibus porro repellat a laudantium? Adipisci, culpa nihil.</p>
            </div>
        </section>
    )
}

export default PageSection;