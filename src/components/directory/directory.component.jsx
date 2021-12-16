import React from "react";
import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [{
              title: 'hats',
              imageUrl: '/images/hats.png',
              id: 1,
              linkUrl: 'hats'
            },
            {
              title: 'jackets',
              imageUrl: '/images/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: '/images/sneakers.png',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: '/images/womens.png',
              id: 4,
              linkUrl: 'shop/womens',
              size: 'large'
            },
            {
              title: 'mens',
              imageUrl: '/images/men.png',
              id: 5,
              linkUrl: 'shop/mens',
              size: 'large'
            }
          ]};
    }    

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps}/>)}
            </div>
        )
    }    
}

export default Directory;