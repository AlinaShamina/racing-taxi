import PropTypes from 'prop-types';

function Listing({ items = [] }) {
  return (
    <div className="item-list">
      {items.map(item => {
        const {
          listing_id,
          url,
          MainImage,
          title,
          currency_code,
          price,
          quantity
        } = item;

        if (!MainImage) return null;

        const shortTitle =
          title.length > 50 ? title.slice(0, 50) + '…' : title;

        let formattedPrice;
        switch (currency_code) {
          case 'USD':
            formattedPrice = `$${price}`;
            break;
          case 'EUR':
            formattedPrice = `€${price}`;
            break;
          case 'GBP':
            formattedPrice = `£${price}`;
            break;
          default:
            formattedPrice = `${currency_code} ${price}`;
        }

        let stockClass;
        if (quantity <= 10) {
          stockClass = 'stock-low';
        } else if (quantity <= 20) {
          stockClass = 'stock-medium';
        } else {
          stockClass = 'stock-high';
        }

        return (
          <div className="product-card" key={listing_id}>
            <a href={url} target="_blank" rel="noreferrer">
              <img
                src={MainImage.url_570xN}
                alt={title}
                className="product-image"
              />
            </a>
            <div className="product-info">
              <h3 className="product-title">{shortTitle}</h3>
              <div className="price-container">
                <div className="product-price">{formattedPrice}</div>
                <span className={`stock-badge ${stockClass}`}>
                  {quantity} left
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Listing.propTypes = {
  items: PropTypes.array
};

export default Listing;
