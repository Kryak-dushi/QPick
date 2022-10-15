import React from 'react';

export const CartSummary = ({ amount }) => {
    return (
        <div className='cart_summary'>
            <div className="cart_summary_info">
                <div className="cart_summary_title">ИТОГО</div>
                <div className="cart_summary_amount">{amount + " ₽"}</div>
            </div>
            <button className="cart_action">Перейти к оформлению</button>
        </div>
    );
};
