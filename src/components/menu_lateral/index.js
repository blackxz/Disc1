import React from 'react';
import './style.css';
import {AiOutlinePlus} from 'react-icons/ai';
import {BsDownload} from 'react-icons/bs';
import {FaCompass} from 'react-icons/fa';
import {FaDiscord} from 'react-icons/fa'

const lista = [{
    icon: <AiOutlinePlus/>,
    desc: "Adicionar",
    },
    {
    icon: <AiOutlinePlus/>,
    desc: "Adicionar",
    },
    {
    icon: <AiOutlinePlus/>,
    desc: "Adicionar",
    },
    {
    icon: <AiOutlinePlus/>,
    desc: "Adicionar",
    },
    {
    icon: <FaCompass/>,
    desc: "Explore servidores públicos",
    },
];

const final = lista.map(n =><li data-tooltip={n.desc}><span className="marc"></span><icon id="icon">{n.icon}</icon></li>)

const Menu = () => (
    <div id = "Menu">

        <div id="div1" data-tooltip="Ínicio" className="default"><span className="marc" id="m1"></span><icon id="icon"><FaDiscord/></icon></div>
        <hr className="default1"/>

        <ul>
            {final}
        </ul>

        <hr className="default1"/>
        <div id="div2" data-tooltip="Baixar apps" className="default"><span className="marc"></span><icon id="icon"><BsDownload/></icon></div>

    </div>
);

export default Menu;