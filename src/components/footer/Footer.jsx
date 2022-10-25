import React from 'react';
import s from "./Footer.module.css";

// import React icons
import { GiWaterRecycling } from "react-icons/gi";

// Import assets
import logo from "../../assets/logo.png";
import pragnoz1 from "../../assets/pragnoz1.png";
import pragnoz2 from "../../assets/pragnoz2.png";

function Footer() {

    return (
        <>
            <footer className={s.footer}>
                <section className={s.footer__header}>
                    <p>©  ООО "Мебельная компания "Лером" 2021</p>
                    <img src={logo} alt="photo" />
                    <div className={s.creator}>
                        <p>Сайт разработан  -</p>
                        <h1>E S V
                            <GiWaterRecycling className={s.reverse__icon} />
                            <span>digital</span>
                        </h1>
                    </div>
                </section>

                <div className={s.main__footer}>
                    <div className={s.footer__start}>
                        <div className={s.bloks}>
                            <h1>О компании</h1>
                            <a href="#">Производство</a>
                            <a href="#">Награды</a>
                            <a href="#">Сертификаты</a>
                        </div>
                        <div className={s.bloks}>
                            <h1>Покупателю</h1>
                            <a href="#">Как сделать заказ</a>
                            <a href="#">Рекомендации по сборке</a>
                            <a href="#">Договор публичной оферты</a>
                        </div>
                        <div className={s.bloks}>
                            <h1>Полезная информация</h1>
                            <a href="#">Всё о фасадах</a>
                            <a href="#">Всё о фурнитуре</a>
                            <a href="#">Всё о ЛДСП</a>
                        </div>
                        <div className={s.bloks}>
                            <h1>3D-моделирование</h1>
                            <p>Запустить онлайн, <br /> от 2 Мбит/с</p>
                            <p>Скачать на компьютер, <br /> 606 Мб</p>
                        </div>
                        <div className={s.link}>
                            <a href="#">Рассрочка</a>
                            <a href="#">Гарантия</a>
                            <a href="#">Контакты</a>
                        </div>
                        <div className={s.prophecy}>
                            <img src={pragnoz1} alt="photo" />
                            <img src={pragnoz2} alt="photo" />
                        </div>
                    </div>
                    <div className={s.footer__end}>
                        <p>
                            Все права защищены. Любое копирование и использование материалов сайта разрешено только с письменного согласия правообладателя. Не является публичной офертой.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;