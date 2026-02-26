import { NavLink } from "react-router-dom"

export default function Menu() {
  const getLinkClass = ({ isActive }) =>
    isActive ? "menu__item menu__item-active" : "menu__item"

  return (
    <nav className="menu">
      <NavLink to="/" end className={getLinkClass}>
        Главная
      </NavLink>
      <NavLink to="/drift" className={getLinkClass}>
        Дрифт-такси
      </NavLink>
      <NavLink to="/timeattack" className={getLinkClass}>
        Time Attack
      </NavLink>
      <NavLink to="/forza" className={getLinkClass}>
        Forza Karting
      </NavLink>
    </nav>
  )
}