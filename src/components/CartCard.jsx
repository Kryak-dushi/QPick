import React from 'react';

import { store } from './Store';

export const CartCard = ({ item }) => {
    const addClickHandler = () => {
        store.cart[item.sku].count++;
    }

    const subClickHandler = () => {
        store.cart[item.sku].count--;
    }

    const delClickHandler = () => {
        delete store.cart[item.sku];
    }

    return (
        <div className="cart_card">
            <div className="cart_card_row">
                <div className="cart_card_info">
                    <img src={item.img} alt={item.title} className="cart_card_img" />
                    <div className="cart_card_text_info">
                        <div className="cart_card_title">{item.title}</div>
                        <div className="cart_card_price">{item.price + " ₽"}</div>
                    </div>
                </div>
                <img src="./assets/Delete.svg" alt="Delete icon" className="icon" onClick={delClickHandler} />
            </div>
            <div className="cart_card_row">
                <div className="cart_card_counter_container">
                    {
                        store.getCountBySKU(item.sku) > 1
                            ? <button className="cart_card_button" onClick={subClickHandler}>−</button>
                            : <button disabled className="cart_card_button" onClick={subClickHandler}>−</button>
                    }
                    <div className="cart_card_counter">{store.getCountBySKU(item.sku)}</div>
                    <button className="cart_card_button" onClick={addClickHandler}>+</button>
                </div>
                <div className="cart_card_amount">{store.getTotalPriceBySKU(item.sku) + " ₽"}</div>
            </div>
        </div>
    );
};
