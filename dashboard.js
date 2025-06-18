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

  summaryBox.innerHTML = "";

  if (skinInfo) {
    summaryBox.innerHTML += `
      <h3>Skin Profile</h3>
      <p><strong>Skin Type:</strong> ${skinInfo.skinType}</p>
      <p><strong>Allergies:</strong> ${skinInfo.allergy}</p>
      <p><strong>Concern:</strong> ${skinInfo.concern}</p>
      <p><strong>Uses Sunscreen:</strong> ${skinInfo.sunscreenUse}</p>
      <p><strong>Looking For:</strong> ${skinInfo.productType}</p>
      <p><strong>Routine:</strong> ${skinInfo.routine}</p>
    `;

    // Suggest at least 2 products for each concern
    const concernProducts = {
      acne: [
        {
          name: "Minimalist Salicylic Acid Serum",
          desc: "Helps unclog pores and reduce acne.",
          image: "https://m.media-amazon.com/images/I/51YDAPq1JSL._AC_UL480_FMwebp_QL65_.jpg", 
          link: "https://www.amazon.in/Minimalist-Salicylic-Exfoliant-Blackheads-Exfoliating/dp/B08GG9M863/ref=sr_1_5?crid=2DMXK5M9Z49O3&dib=eyJ2IjoiMSJ9.iFChFZtA9L8frcGCjqTA107UuxVriP8SWczvlOJfDPn-UO_wapcRTkUQiGBrnTrqRWc99tXPCRNYOiUeVwU6vkbUkldEWHyNF9BYWV_STybKjnmK3ZDVx0X1hSIeLi0-3oXOaxBH4yIJqIAA3QufbWVjs-YwKTTuMLoNI7rzn8uEK08tVnNc4vskYOW-ag7dp6rFpm14bKYVfbOdGBclxlbzQSeQjMqVtPWF-lBYFGLFjRj_rES7pL2kxlxBo_3tVUiQabIyIghvVcKgVV9SOH0yrkOsKv3uYbF68159AaI.jCPGRs1XAFcfBKS8iFmQ-NqSFowKX-fFG5zmJ_kTCA4&dib_tag=se&keywords=Minimalist+Salicylic+Acid+Serum&qid=1750179434&sprefix=minimalist+salicylic+acid+serum%2Caps%2C350&sr=8-5"
        },
        {
          name: "Neutrogena Oil-Free Acne Wash",
          desc: "Cleanses and helps prevent acne breakouts.",
          image: "https://m.media-amazon.com/images/I/41pntRJu6gL._AC_UL480_FMwebp_QL65_.jpg",
          link: "https://www.amazon.in/Neutrogena-Free-Acne-Face-175ml/dp/B006LXDMCS/ref=sr_1_5?crid=UUV8OVUCOZLW&dib=eyJ2IjoiMSJ9.LObfS2NsI1lpYxJpjBywBaWIEHl0OFdrkOHR-wthMiKxibejOXE0vQonBolDyAr6NxgIOhtPveACYdcYV09oNuWURwsL03UdIsLpytV7hK9_FiCSHpRCsQeWg_xl2CfverLQQ9w_S4XKpbpg5nDf5DFI6T38MTJQPFby8WFP09D6WP6NwhRO8eHXrbp6JkHiTUsXrprcqnWA06Pmq4hLDr9R1m2Hlfpi9VHcTmL5CHuYfM_z0XlB2mEir3aweYA3BWY2RgIATbTbOzw76_6TwQejt96FDJ7uhJC81T6Zm3U.-BN1yrjTunnkTy3QUEuypwKXFE1PWsK23Mlh3s67SSE&dib_tag=se&keywords=Neutrogena+Oil-Free+Acne+Wash&qid=1750179470&sprefix=neutrogena+oil-free+acne+wash%2Caps%2C375&sr=8-5"
        }
      ],
      aging: [
        {
          name: "Olay Regenerist Retinol 24",
          desc: "Reduces fine lines and wrinkles.",
          image: "https://m.media-amazon.com/images/I/61505N4dSqL._AC_UL480_FMwebp_QL65_.jpg",
          link: "https://www.amazon.in/Olay-Night-Cream-Regenerist-Moisturiser/dp/B08698TW6X/ref=sr_1_5?crid=U0WJ0F2PJNXK&dib=eyJ2IjoiMSJ9.7JWjG_DCbGVxdmc0AJ2iZFI8hxx14Rnjg870BHgLKMo7OiOZK2J2GNskqanSOuIi_aTagK8pidRF8eyXCepcBKJOErARU7vCqQuy5BCwFEu1FjkDAX8TCwqqKk6j09iUmuFmORvOuk2KqnX3zFe-P2kuUsE7_tZUrm14U3GTWHzj_YamTDS_0SdrOqsXg648yC7rZoOrBAogVDDhuq9-GLc-RvEKyUvfQmMqQfKJzEfYWy9TU1uPVg3KIstfIQeeHJpVmDvpwVDAqL3u8mp55ZgTYjEjR9zRsDODZBzsSkw.t9Zr6M-cxdq9ZoinOx1WjG7TbjP_ldt3KOQPVyHrwwg&dib_tag=se&keywords=Olay+Regenerist+Retinol+24&qid=1750179381&sprefix=l%27or%C3%A9al+paris+revitalift+night+cream%2Caps%2C551&sr=8-5"
        },
        {
          name: "L'Oréal Paris Revitalift Night Cream",
          desc: "Firms skin and reduces signs of aging.",
          image: "https://m.media-amazon.com/images/I/41okT6G33bL._AC_UL480_FMwebp_QL65_.jpg",
          link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMzE3Mzc3MTI4MjAxNzcxOjE3NTAxNzkzMjk6c3BfYXRmOjIwMTI2MDY2MDUxMDk4OjowOjo&url=%2FParis-Glycolic-Brightening-Visbily-Minimizes%2Fdp%2FB09STBTH86%2Fref%3Dsr_1_1_sspa%3Fcrid%3DQ7B12C5SFYOH%26dib%3DeyJ2IjoiMSJ9.jzA2mCFahlYH1l-TJ4cPkvKFx7jl5bUVAVOZwBbUiOM44AHtDETjFSIsCzE4EsOZmRL2JSpycH-QAS9UF6m9BE57gea4N9NBPpH8DJqCFpDcSrbFNzGbPaqO7hxbzVMi4yZlCJepjC9KZKe-DVPc28iApAb9ut1pi8dw8iU0I1Dd_xceNQa64Sktn-zlbxiSbD38egOppyCi3bBPVgZvwCk3YAvcRrSlDqtnuYFniMuADHcNZP4-pg8z7xBG7Xfw301mJkNpHl7Uc4vswFfw2v2DRUC4ycoBGCPHPc0SqOg.d5L-kCx7D0Cifd5sxGXC2usUg4c3HYlKt89VuUUi-uY%26dib_tag%3Dse%26keywords%3DL%2527Or%25C3%25A9al%2BParis%2BRevitalift%2BNight%2BCream%26qid%3D1750179329%26sprefix%3Dl%2527or%25C3%25A9al%2Bparis%2Brevitalift%2Bnight%2Bcream%252Caps%252C310%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
        }
      ],
      pigmentation: [
        {
          name: "The Ordinary Alpha Arbutin 2% + HA",
          desc: "Targets dark spots and uneven skin tone.",
          image: "https://th.bing.com/th/id/OIP.i43xlJmyANPB5Ff3vCYkmAHaHa?w=198&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
          link: "https://www.amazon.in/dp/B0779931K2"
        },
        {
          name: "Minimalist Vitamin C Serum",
          desc: "Brightens skin and reduces pigmentation.",
          image: "https://m.media-amazon.com/images/I/415TsX6-jzL._SX300_SY300_QL70_FMwebp_.jpg",
          link: "https://www.amazon.in/Minimalist-Vitamin-Advanced-Brightening-Fullerenes/dp/B09VPNK8VP/ref=sr_1_6?crid=1FDRM7IA14MYR&dib=eyJ2IjoiMSJ9.dbc0RyCQVmzFwla2bhQs5t37dSCQx0Cg57VJQdDyuPe2yAggYm1U2THfjBIF7iWS5wO40Yd_IQfHzZs1JyXxPwVdV3EuN8muip5CUWYMa_aaEKp3ju2upEufuZASf8E0r6AtROGBcI-crbeUdrjkDfVfEGMO8oOOW5UTDzFAY7_sxHbtBNYwmgjVVL7eKI-KCQZHItAb7UfnLxZBfHGorzs0ZAphKrki1v1RZjhcrL7ZsxmUU4VchTiLhypgAeMSad4evoYgzBEakPIz75knItFOzIlSnOagCHqju1dCNcs.xbQWp4YCTsnYJre512xoIW5pyEWd6rvJ0iRQWya3EJ8&dib_tag=se&keywords=Minimalist+Vitamin+C+Serum&qid=1750179167&sprefix=minimalist+vitamin+c+serum%2Caps%2C293&sr=8-6"
        }
      ],
      redness: [
        {
          name: "La Roche-Posay Toleriane Sensitive",
          desc: "Soothes and calms sensitive, red skin.",
          image: "https://m.media-amazon.com/images/I/31Qri81-ytL._SX300_SY300_QL70_FMwebp_.jpg",
          link: "https://www.amazon.in/Roche-Posay-Toleriane-Double-Moisturizer-Sensitive/dp/B01N9SPQHQ/ref=sr_1_5?crid=10SDT3O5A8302&dib=eyJ2IjoiMSJ9.36mVyng2xu3nucTK0QOfngs1RmNLFfjDoU79LTlusdjC-ySfjoYPgtfz2G_I8in23Az5V6PPtK2PMocaQQTfw0EAPdUiHCMtiCQ-XtZTbVUW5XQgpUMPyhUU1wysyPOsp8cvB296EezdtfhRRqbZez1N_1ps8dPnn_PEx9aGjhGXNiEsEmUxJyIoP0qmfxSDPlXjIxBwVB_VAvYzpzBcOcTK1Er5Q6fh_Twlsq2zmaI3jlYBWSW83xlrxo0O1uVTcOBuzMBs7KqAK8huMFjsil6FMJtmJwD28vRqPJFu0XM.SjxWYb_ZLDau3cROvCCM1X5d8gdSbwGcOuG6k1MHgGg&dib_tag=se&keywords=La%2BRoche-Posay%2BToleriane%2BSensitive&qid=1750179120&sprefix=neutrogena%2Bhydro%2Bboost%2Bwater%2Bgel%2Caps%2C469&sr=8-5&th=1"
        },
        {
          name: "Avene Antirougeurs Calm Soothing Mask",
          desc: "Reduces redness and soothes irritation.",
          image: "https://m.media-amazon.com/images/I/61QKQ9mwV7L._SX679_.jpg",
          link: "https://www.amazon.in/dp/B01HOHBSK6"
        }
      ],
      dullness: [
        {
          name: "Neutrogena Hydro Boost Water Gel",
          desc: "Boosts hydration and brightens skin.",
          image: "https://m.media-amazon.com/images/I/41zlBkFoxQL._SX300_SY300_QL70_FMwebp_.jpg",
          link: "https://www.amazon.in/Neutrogena-Hydro-Boost-Water-Blue/dp/B00BQFTQW6/ref=sr_1_1_sspa?crid=1HHWTYNVJ5ZC2&dib=eyJ2IjoiMSJ9.0eVrUfjd5V8s-OZTjujFQJjIE73HrnldwNZKjujCP3GLdlNBJuyZQqd5HkJrdaJ32XNWEzgYyo3pcg2m_IMo_E-1iaCCeZB5xtzKhW8fj6jW4gmx3YjuxVyWVeb1jSKCKf94JCCAAJpQ1QYng2gdJqQub7OCTbk3KRj-cu13xr1_xLlyMfJnX6cp0ob1jj4JDuB6L4EGK3TKvrVubCZbcTje7lLunUBtAU3xkDkPBt9jRCQJcbGVBglDmFa0IVzKfiwBqiyDPHzyNCmfnRheYK4BDbkTUS1t5T6slW1gL9c.lz2Fb2pM_5YtsX-xjrLwuz7WAG09jK32pHdY1YdwJLI&dib_tag=se&keywords=Neutrogena+Hydro+Boost+Water+Gel&qid=1750179073&sprefix=neutrogena+hydro+boost+water+gel%2Caps%2C391&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
        },
        {
          name: "Plum Bright Years Cell Renewal Serum",
          desc: "Improves skin radiance and texture.",
          image: "https://m.media-amazon.com/images/I/31lQ2psEC0L._SX300_SY300_QL70_FMwebp_.jpg",
          link: "https://www.amazon.in/Plum-Bright-Years-Renewal-Serum/dp/B07NSCT88X/ref=sr_1_5?crid=20AOSW9B7IWWY&dib=eyJ2IjoiMSJ9.LnC0ertuUPLVgCWUDFR_Ktl05829bz8QdjluhA8AB19un52UtO2v9sQprZMUMPNUq68g2eFQjcTTT5WGlCp88BNEIj8A2YGGLBTsAYvj64AkkpbBkkaRcQlNfZd4Rq2f59RssXR51vMa9XZI9CXDwjUmmn6eHoYwBonpWkAM8jzqQUlWitmHu-AlON01vKebW5Q8PF_x_KWMuLzZgp8eSZV7xsnHfum-thwLOI2I2j-HdRrf5X2QPDl_1-8RVUI0dQgiwd25-zpJk5lIPsJGUVitOncvbgxzu1WmioS8jeg.kpAsJhlfviR3-hu2kRrcrewkpTuQtHyMr29SmQTwwEE&dib_tag=se&keywords=Plum%2BBright%2BYears%2BCell%2BRenewal%2BSerum&qid=1750178947&sprefix=plum%2Bbright%2Byears%2Bcell%2Brenewal%2Bserum%2Caps%2C316&sr=8-5&th=1"
        }
      ],
      hydration: [
        {
          name: "Cetaphil Moisturising Cream",
          desc: "Intense hydration for dry skin.",
          image: "https://m.media-amazon.com/images/I/51JZJuOfoBL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg",
          link: "https://www.amazon.in/stores/page/C61E2A7C-CF89-4491-83A5-671B2CDA5B18/?_encoding=UTF8&store_ref=SB_A07289352861Q3GXLK80S-A05177372QZK2QJL55VSB&pd_rd_plhdr=t&aaxitk=aaca3755a44f21e097e5141cb0f38c1d&hsa_cr_id=0&lp_asins=B099MJH88B%2CB0C538438S%2CB0C5386WZM&lp_query=Cetaphil%20Moisturising%20Cream&lp_slot=auto-sparkle-hsa-tetris&aref=UcdHFUkpmq&ref_=sbx_be_s_sparkle_dlcd_ls_dpc&pd_rd_w=WcAKs&content-id=amzn1.sym.5e94cbee-68a7-46b5-b2e9-bb5445edd00f%3Aamzn1.sym.5e94cbee-68a7-46b5-b2e9-bb5445edd00f&pf_rd_p=5e94cbee-68a7-46b5-b2e9-bb5445edd00f&pf_rd_r=10TB6RWVJK2QD1WBJ46T&pd_rd_wg=AbGIk&pd_rd_r=76ca50b8-bc41-4fa2-a015-5da5a24fdd04"
        },
        {
          name: "Clinique Moisture Surge 72-Hour",
          desc: "Long-lasting hydration for all skin types.",
          image: "https://m.media-amazon.com/images/I/410YSZgftUL._SY450_.jpg",
          link: "https://www.amazon.in/metrey-Moisture-Auto-Replenishing-Hydrator-Moisturizer/dp/B0DK1J9F4P/ref=sr_1_6?crid=1HM9W13SRXBB1&dib=eyJ2IjoiMSJ9.a2CPdSpdRxO0W1kzJxzOB31jrRzTGZk60MQ8_QT9GbcIdge1hJG9Xr0VcSc4j6bBYaE7_TOW2Zy1NoRQHPyiA5eB-BYexFY4y5FfJIA5EyuFAWcFs2rzNa_-1FURGPOS3tlhQ78G64BWLX4vlPcCqF4aAUDVi05X6hKrYRLlqqYa3-6AyG0hS4mWABXYSsH1oynlq8onX3xFYffE5hxRtCdkdMDNKrLWegVLnKfP7v8JOUOAvuqGeYPlhh4tcuhHsytWUJW1qFI_CeA4lwCMtZiVIgcjBwUdqpANJvCeYaQ.nWMKH0iUoqaLvZ7UKeia2XD57boWD8dEAOf_EhRlOcE&dib_tag=se&keywords=Clinique+Moisture+Surge+72-Hour&qid=1750178876&sprefix=%2Caps%2C288&sr=8-6"
        }
      ]
    };

    const userConcern = skinInfo.concern;
    const products = concernProducts[userConcern] || [];

    if (products.length > 0) {
      summaryBox.innerHTML += `<h3>Suggested Products</h3>`;
      summaryBox.innerHTML += products.map(createProductCard).join('');
    }
  }
});

class PromptElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h3>Hair Suggestions</h3>
      <ul>
        <li><strong>Hair Fall:</strong> Use a gentle shampoo, avoid tight hairstyles, and eat a balanced diet rich in protein and vitamins.</li>
        <li><strong>Dandruff:</strong> Use an anti-dandruff shampoo, keep your scalp clean, and avoid oily hair products.</li>
        <li><strong>Frizz:</strong> Use a moisturizing conditioner, avoid heat styling, and dry hair with a microfiber towel.</li>
        <li><strong>Dryness:</strong> Apply nourishing hair oils, use sulfate-free shampoo, and avoid washing hair with hot water.</li>
        <li><strong>Split Ends:</strong> Trim hair regularly, use leave-in conditioner, and minimize chemical treatments.</li>
      </ul>
    `;
  }
}

customElements.define('prompt', PromptElement);

document.getElementById('hairForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const answers = {
    hairFall: form.hairFall.checked,
    dandruff: form.dandruff.checked,
    frizz: form.frizz.checked,
    dryness: form.dryness.checked,
    splitends: form.splitends.checked
  };
  localStorage.setItem('hairAnswers', JSON.stringify(answers));
  window.location.href = 'dashboard.html'; // Redirect to dashboard
});

const suggestions = {
  hairFall: "Use a gentle shampoo, avoid tight hairstyles, and eat a balanced diet rich in protein and vitamins.",
  dandruff: "Use an anti-dandruff shampoo, keep your scalp clean, and avoid oily hair products.",
  frizz: "Use a moisturizing conditioner, avoid heat styling, and dry hair with a microfiber towel.",
  dryness: "Apply nourishing hair oils, use sulfate-free shampoo, and avoid washing hair with hot water.",
  splitends: "Trim hair regularly, use leave-in conditioner, and minimize chemical treatments."
};

function showHairSuggestions() {
  const answers = JSON.parse(localStorage.getItem('hairAnswers') || '{}');
  let html = '<h3>Your Hair Suggestions</h3><ul>';
  let any = false;
  for (const key in suggestions) {
    if (answers[key]) {
      html += `<li><strong>${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> ${suggestions[key]}</li>`;
      any = true;
    }
  }
  if (!any) html += '<li>No issues selected.</li>';
  html += '</ul>';
  document.querySelector('prompt').innerHTML = html;
}

window.addEventListener('DOMContentLoaded', showHairSuggestions);
