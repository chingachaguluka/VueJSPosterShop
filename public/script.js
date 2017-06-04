new Vue({
    el: '#app',
    data: {
        items: [
            {id: 1, title: 'Item 1'}, 
            {id: 2, title: 'Item 2'}, 
            {id: 3, title: 'Item 3'}, 
            {id: 4, title: 'Item 4'}
        ],
        total: 0,
        cart: []
    },
    methods: {
        addItem: function(index) {
            var found = false;
            var item = this.items[index];
            for(var cnt = 0; cnt < this.cart.length; cnt++) {
                if (item.id === this.cart[cnt].id) {
                    this.cart[cnt].qty++;
                    found = true;
                }
            }

            if (!found) {
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    qty: 1
                });
            }
            this.total += 9.99;

        }
    }
});
