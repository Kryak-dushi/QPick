import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_info">
                <div className="footer_column">
                    <h1 className="title">QPICK</h1>
                </div>
                <div className="footer_column">
                    <Link className="footer_link"><div>Избранное</div></Link>
                    <Link to="/cart" className="footer_link"><div>Корзина</div></Link>
                    <Link className="footer_link"><div>Контакты</div></Link>
                </div>
                <div className="footer_column">
                    <Link className="footer_link"><div className="footer_link">Условия сервиса</div></Link>
                    <div className="footer_row">
                        <img className="icon" src="./assets/Language.png" alt="Languages icon" />
                        <Link className="footer_language active_language"><div>Рус</div></Link>
                        <Link className="footer_language"><div>Eng</div></Link>
                    </div>
                </div>
                <div className="footer_column">
                    <div className="footer_row">
                        <a href="https://vk.com/neoflex_ru">
                            <img className="footer_link_icon" src="./assets/VK.svg" alt="VK icon" /></a>
                        <a href="https://t.me/Quack_from_the_heart">
                            <img className="footer_link_icon" src="./assets/Telegram.svg" alt="Telegram icon" /></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                            <img className="footer_link_icon" src="./assets/Whatsapp.svg" alt="Whatsapp icon" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
