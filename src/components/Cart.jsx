import React from 'react';
import { CartCard } from './CartCard';

export const Cart = ({ items }) => {
    return (
        <div className="cart_cards_container">
            {
                items.map((item, i) => {
                    return <CartCard item={item} key={i} />;
                })
            }
        </div>
    );
};
