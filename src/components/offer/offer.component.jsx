import React from "react";

import ProductItem from "../product-item/product-item.component";

import "./offer.styles.css";

class Offer extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedOfferId: 1
        }
    }

    render() {
        return (
            <div className='offer'>
                <div className="offer-title">{this.props.title}</div>
                {this.props.categories ? <div className='offer-header'>
                                            {this.props.categories.map(section => (
                                                <div className='offer-header-item' key={section.id}>
                                                    {section.title}
                                                </div>
                                            ))}
                                        </div>
                : ""}
                <div className='offer-items'>
                    {this.props.categories
                        ?
                        this.props.categories.filter(category => category.id === this.state.selectedOfferId).map(category => category.items.map(item => <div className="offer-item" key={item.id}><ProductItem key={item.id} props={item} /></div>))
                        : this.props.products 
                            ?
                            this.props.products.map(item => <div className="offer-item" key={item.id}><ProductItem key={item.id} props={item} /></div>)
                            : 
                            ""
                        }
                    {}
                </div>
            </div>
        )
    }
}

export default Offer;