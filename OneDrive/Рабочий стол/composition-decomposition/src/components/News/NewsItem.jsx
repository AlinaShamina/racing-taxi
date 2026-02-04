/**
 * NewsItem — отображает одну новость с иконкой, текстом и ссылкой
 */
function NewsItem({ icon, text, link }) {
  return (
    <div>
      <span>{icon}</span>{' '}
      <a href={link}>{text}</a>
    </div>
  );
}

export default NewsItem;
