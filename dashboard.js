document.addEventListener('DOMContentLoaded', function() {
  function createProductCard(product) {
    return `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <a href="${product.link}" target="_blank">Buy Now</a>
      </div>
    `;
  }

  const summaryBox = document.getElementById('summaryBox');
  const productsBox = document.getElementById('products');

  const skinInfo = JSON.parse(localStorage.getItem('skinInfo'));
  const hairInfo = JSON.parse(localStorage.getItem('hairInfo'));

  if (skinInfo) {
    summaryBox.innerHTML = `
      <h3>Skin Profile</h3>
      <p><strong>Skin Type:</strong> ${skinInfo.skinType}</p>
      <p><strong>Allergies:</strong> ${skinInfo.allergy}</p>
      <p><strong>Concern:</strong> ${skinInfo.concern}</p>
      <p><strong>Uses Sunscreen:</strong> ${skinInfo.sunscreenUse}</p>
      <p><strong>Looking For:</strong> ${skinInfo.productType}</p>
      <p><strong>Routine:</strong> ${skinInfo.routine}</p>
    `;

    const skinProducts = [
      {
        name: "Minimalist Sunscreen SPF 50",
        desc: "Non-comedogenic sunscreen for oily and acne-prone skin.",
        image: "https://m.media-amazon.com/images/I/61B0ZxL7m0L._SX679_.jpg",
        link: "https://www.amazon.in/dp/B09BCVZRM1"
      },
      {
        name: "Cetaphil Gentle Cleanser",
        desc: "Mild, hydrating face wash suitable for all skin types.",
        image: "https://m.media-amazon.com/images/I/61SnT0e3bpL._SX679_.jpg",
        link: "https://www.amazon.in/dp/B00B5LFR2E"
      }
    ];

    productsBox.innerHTML = skinProducts.map(createProductCard).join('');
  }

  if (hairInfo) {
    summaryBox.innerHTML = `
      <h3>Hair Profile</h3>
      <p><strong>Hair Type:</strong> ${hairInfo.hairType}</p>
      <p><strong>Issue:</strong> ${hairInfo.problem}</p>
      <p><strong>Wash Frequency:</strong> ${hairInfo.washFrequency}</p>
      <p><strong>Hair Treatments:</strong> ${hairInfo.treatment}</p>
      <p><strong>Hair Goal:</strong> ${hairInfo.goal}</p>
      <p><strong>Budget:</strong> ${hairInfo.budget}</p>
    `;

    const hairProducts = [
      {
        name: "Mamaearth Onion Hair Oil",
        desc: "Promotes hair growth and reduces hair fall.",
        image: "https://m.media-amazon.com/images/I/61+WhMEW6HL._SX679_.jpg",
        link: "https://www.amazon.in/dp/B08GYFCB1M"
      },
      {
        name: "WOW Apple Cider Vinegar Shampoo",
        desc: "Removes buildup and restores scalp health.",
        image: "https://m.media-amazon.com/images/I/81zQZkqdnxL._SX679_.jpg",
        link: "https://www.amazon.in/dp/B01N2T9M01"
      }
    ];

    productsBox.innerHTML = hairProducts.map(createProductCard).join('');
  }

  const concernProducts = {
    acne: {
      name: "Minimalist Salicylic Acid Serum",
      desc: "Helps unclog pores and reduce acne.",
      image: "https://m.media-amazon.com/images/I/61B0ZxL7m0L._SX679_.jpg",
      link: "https://www.amazon.in/dp/B09BCVZRM1"
    },
    aging: {
      name: "Olay Regenerist Retinol 24",
      desc: "Reduces fine lines and wrinkles.",
      image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._SX679_.jpg",
      link: "https://www.amazon.in/dp/B07ZQJ6RLF"
    },
    pigmentation: {
      name: "The Ordinary Alpha Arbutin 2% + HA",
      desc: "Targets dark spots and uneven skin tone.",
      image: "https://m.media-amazon.com/images/I/61l7QvQ5VnL._SX679_.jpg",
      link: "https://www.amazon.in/dp/B0779931K2"
    },
    redness: {
      name: "La Roche-Posay Toleriane Sensitive",
      desc: "Soothes and calms sensitive, red skin.",
      image: "https://m.media-amazon.com/images/I/61gkJQw3wzL._SX679_.jpg",
      link: "https://www.amazon.in/dp/B07D3ZK6GJ"
    },
    dullness: {
      name: "Neutrogena Hydro Boost Water Gel",
      desc: "Boosts hydration and brightens skin.",
      image: "https://m.media-amazon.com/images/I/61QKQ9mwV7L._SX679_.jpg",
      link: "https://www.amazon.in/dp/B01HOHBSK6"
    },
    hydration: {
      name: "Cetaphil Moisturising Cream",
      desc: "Intense hydration for dry skin.",
      image: "https://m.media-amazon.com/images/I/61SnT0e3bpL._SX679_.jpg",
      link: "https://www.amazon.in/dp/B00B5LFR2E"
    }
  };

  const userConcern = skinInfo.concern; // e.g., "acne"
  const product = concernProducts[userConcern];

  if (product) {
    const googleImageUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(product.name)}`;
    summaryBox.innerHTML += `
      <h3>Suggested Product</h3>
      <a href="${googleImageUrl}" target="_blank" rel="noopener noreferrer">
        <img src="${product.image}" alt="${product.name}" style="width:120px;height:120px;object-fit:cover;border-radius:8px;" />
      </a>
      <p><strong>${product.name}</strong></p>
      <p>${product.desc}</p>
      <a href="${product.link}" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
      <br/>
      <a href="${googleImageUrl}" target="_blank" rel="noopener noreferrer">See more images on Google</a>
    `;
  }

  {suggestions.map(suggestion => {
    const googleImageUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(suggestion.title)}`;
    return (
      <div key={suggestion.id} className="dashboard-item">
        <a href={googleImageUrl} target="_blank" rel="noopener noreferrer">
          <img 
            src={`https://via.placeholder.com/100?text=${encodeURIComponent(suggestion.title)}`} 
            alt={suggestion.title} 
            style={{ width: 100, height: 100 }} 
          />
        </a>
        <h3>{suggestion.title}</h3>
        <p>{suggestion.description}</p>
      </div>
    );
  })}
});
