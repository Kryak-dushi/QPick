import React from 'react';
import { store } from './Store';

export const Card = ({ item }) => {
    const clickHandler = () => {
        if (store.cart[item.sku]) {
            store.cart[item.sku].count++;
        } else {
            store.cart = {
                ...store.cart,
                [item.sku]: {
                    item,
                    count: 1
                }
            }
        }
    };

    return (
        <div className="card">
            <div className="card_img_container">
                <img className="card_img" src={item.img} alt={item.title} />
            </div>
            <div className="card_info">
                <div className="card_info_row">
                    <span className="card_name">{item.title}</span>
                    <span className="card_price">{item.price + " ₽"}</span>
                </div>
                {
                    item.priceBeforeDiscount && (
                        <div className="card_info_row">
                            <span className="card_price_before_discount">{item.priceBeforeDiscount + " ₽"}</span>
                        </div>
                    )
                }
                <div className="card_info_row">
                    <div className="card_rate_row">
                        <img className="icon" src="./assets/Rate.svg" alt="Rate icon" />
                        <span className="card_rate">{item.rate}</span>
                    </div>
                    <button className="card_action" onClick={clickHandler}>Купить</button>
                </div>
            </div>
        </div>
    );
};
