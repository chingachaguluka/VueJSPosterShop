var PRICE = 9.99;

new Vue({
    el: '#app',
    data: {
        items: [],
        total: 0,
        cart: [],
        newSearch: '',
        lastSearch: ''
    },
    methods: {
        onSubmit: function() {
            this.$http
                .get('/search/'.concat(this.newSearch))
                .then(function(res) {
                    this.items = res.data;
                    this.lastSearch = this.newSearch;
                })
        },
        addItem: function(index) {
            var found = false;
            var item = this.items[index];
            for(var cnt = 0; cnt < this.cart.length; cnt++) {
                if (item.id === this.cart[cnt].id) {
                    this.cart[cnt].qty++;
                    found = true;
                    break;
                }
            }

            if (!found) {
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    price: PRICE,
                    qty: 1
                });
            }
            this.total += 9.99;

        },
        inc: function(item) {
            item.qty++;
            this.total += 9.99;
        },
        dec: function(item) {
            item.qty--;
            this.total -= 9.99;
            if (item.qty <= 0) {
                for(var cnt = 0; cnt < this.cart.length; cnt++) {
                    if (item.id === this.cart[cnt].id) {
                        this.cart.splice(cnt,1);
                        break;
                    }
                }
            }
            
        }
    },
    filters: {
        currency: function(price) {
            return 'MK'.concat(price.toFixed(2));
        }
    }
});
