import React, { useState } from 'react';
import './styles/cart.css';
//import './src/Queries/userQuer'
//import MyApp from './PaypalButton';

function Cart() {
    var name = "Tresume";
    var desc = "Testing this out"
    var price = 30.99

    /*Number.prototype.to_$ = function () {
    return "$" + parseFloat( this ).toFixed(2);
    };
    String.prototype.strip$ = function () {
    return this.split("$")[1];
    };

    var app = {

    shipping : 5.00,
    products : [
        {
            "name" : "Meet and greet with Bill Murray",
            "price" : "19.95",
            "img" : "http://fillmurray.com/g/159/159",
            "desc" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            "name" : "Tap Water",
            "price" : "0.99",
            "img" : "http://shechive.files.wordpress.com/2011/08/odd-products-28.jpg?w=159&h=159",
            "desc" : "You decide"
        },
        {
            "name" : "Social Shower Curtain",
            "price" : "40.00",
            "img" : "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc" : "Always stay up-to-date with this very useless shower curtain!"
        },
        {
            "name" : "Self stirring mug",
            "img" : "https://i.dailymail.co.uk/i/pix/2012/09/16/article-2204256-15053801000005DC-304_634x524.jpg",
            "price" : "12.35",
            "desc" : "Don't get tired!"
        }
        ],

    removeProduct: function () {
        "use strict";

        var item = this.closest(".shopping-cart--list-item");

        item.addClass("closing");
        window.setTimeout( function () {
        item.remove();
        app.updateTotals();
        }, 500); // Timeout for css animation
    },

    addProduct: function () {
        "use strict";

        var qtyCtr = this.prev(".product-qty"),
            quantity = parseInt(qtyCtr.html(), 10) + 1;

        app.updateProductSubtotal(this, quantity);
    },

    subtractProduct: function () {
        "use strict";

        var qtyCtr = this.next(".product-qty"),
            num = parseInt(qtyCtr.html(), 10) - 1,
            quantity = num <= 0 ? 0 : num;

        app.updateProductSubtotal(this, quantity);
    },

    updateProductSubtotal: function (context, quantity) {
        "use strict";

        var ctr = context.closest(".product-modifiers"),
            productQtyCtr = ctr.find(".product-qty"),
            productPrice = parseFloat(ctr.data("product-price")),
            subtotalCtr = ctr.find(".product-total-price"),
            subtotalPrice = quantity * productPrice;

        productQtyCtr.html(quantity);
        subtotalCtr.html( subtotalPrice.to_$() );

        app.updateTotals();
    },

    updateTotals: function () {
        "use strict";

        var products = ".shopping-cart--list-item",
            subtotal = 0,
            shipping;

        for (var i = 0; i < products.length; i += 1) {
        subtotal += parseFloat( products[i].find(".product-total-price").html().strip$() );
        }

        shipping = (subtotal > 0 && subtotal < (100 / 1.06)) ? app.shipping : 0;

        $("#subtotalCtr").find(".cart-totals-value").html( subtotal.to_$() );
        $("#taxesCtr").find(".cart-totals-value").html( (subtotal * 0.06).to_$() );
        $("#totalCtr").find(".cart-totals-value").html( (subtotal * 1.06 + shipping).to_$() );
        $("#shippingCtr").find(".cart-totals-value").html( shipping.to_$() );
    },

    attachEvents: function () {
        "use strict";

        $(".product-remove").on("click", app.removeProduct);
        $(".product-plus").on("click", app.addProduct);
        $(".product-subtract").on("click", app.subtractProduct);
    },

    setProductImages: function () {
        "use strict";

        var images = $(".product-image"),
            ctr,
            img;

        for (var i = 0; i < images.length; i += 1) {
        ctr = $(images[i]),
        img = ctr.find(".product-image--img");

        ctr.css("background-image", "url(" + img.attr("src") + ")");
        img.remove();
        }
    },

    renderTemplates: function () {
        "use strict";

        var products = app.products,
            content = [],
            template = new t( $("#shopping-cart--list-item-template").html() );

        for (var i = 0; i < products.length; i += 1) {
        content[i] = template.render(products[i]);
        }

        $("#shopping-cart--list").html(content.join(""));
    }

    };

    app.renderTemplates();
    app.setProductImages();
    app.attachEvents();
*/
  return (
    <div class="main">
    <h1>Shopping cart</h1>
    <h2 class="sub-heading">Free shipping from $100!</h2>

    <section class="shopping-cart">
        <ol class="ui-list shopping-cart--list" id="shopping-cart--list">

        <script id="shopping-cart--list-item-template" type="text/template">
            <li class="_grid shopping-cart--list-item">
            <div class="_column product-image">
                <img class="product-image--img" src="{{img}}" alt="Item image" />
            </div>
            <div class="_column product-info">
                <h4 class="product-name">{name}</h4>
                <p class="product-desc">{desc}</p>
                <div class="price product-single-price">${price}</div>
            </div>
            <div class="_column product-modifiers" data-product-price="{{=price}}">
                <div class="_grid">
                <button class="_btn _column product-subtract">&minus;</button>
                <div class="_column product-qty">0</div>
                <button class="_btn _column product-plus">&plus;</button>
                </div>
                <button class="_btn entypo-trash product-remove">Remove</button>
                <div class="price product-total-price">$0.00</div>
            </div>
            </li>
        </script>

        </ol>

        <footer class="_grid cart-totals">
        <div class="_column subtotal" id="subtotalCtr">
            <div class="cart-totals-key">Subtotal</div>
            <div class="cart-totals-value">$0.00</div>
        </div>
        <div class="_column shipping" id="shippingCtr">
            <div class="cart-totals-key">Shipping</div>
            <div class="cart-totals-value">$0.00</div>
        </div>
        <div class="_column taxes" id="taxesCtr">
            <div class="cart-totals-key">Taxes (6%)</div>
            <div class="cart-totals-value">$0.00</div>
        </div>
        <div class="_column total" id="totalCtr">
            <div class="cart-totals-key">Total</div>
            <div class="cart-totals-value">$0.00</div>
        </div>
        <div class="_column checkout">
        <button class="_btn checkout-btn entypo-forward">Checkout</button>
      </div>
    </footer>

  </section>
</div>
  );
}


export default Cart;