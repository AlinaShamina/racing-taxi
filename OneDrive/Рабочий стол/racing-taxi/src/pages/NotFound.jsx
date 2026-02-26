import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <article className="article">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/">На главную</Link>
    </article>
  )
}