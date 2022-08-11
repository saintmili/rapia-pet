import React from "react";

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';

import './category.styles.css';

class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'انواع غذاها',
                    img: img1,
                    id: 1,
                },
                {
                    title: 'تشویقی',
                    img: img2,
                    id: 2,
                },
                {
                    title: '',
                    img: img3,
                    id: 3,
                },
                {
                    title: 'لوازم بهداشتی سگ',
                    img: img4,
                    id: 4,
                },
                {
                    title: 'تمرینی و آموزشی',
                    img: img5,
                    id: 5,
                },
                {
                    title: 'وسایل مسافرت',
                    img: img6,
                    id: 6,
                }
            ],
        }
    }
    render() {
        return (
            <div className="category">
                {this.state.sections.map(section => (
                    <div className="category_circular" key={section.id}>
                        <div className='category-img'>
                            <img src={section.img} alt='pet' />
                        </div>
                        <div className='category-title'>{section.title}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Category;