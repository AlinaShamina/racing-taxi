import NewsItem from './NewsItem';

/**
 * NewsList — список новостей
 */
function NewsList() {
  return (
    <section>
      <NewsItem icon="🔥" text="Новость 1" link="#" />
      <NewsItem icon="⚡" text="Новость 2" link="#" />
      <NewsItem icon="⭐" text="Новость 3" link="#" />
    </section>
  );
}

export default NewsList;
