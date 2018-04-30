new Vue({
    el: '#app',
    data: {
        total: 0,
        items: [{
                title: 'item 1'
            },
            {
                title: 'item 2'
            },
            {
                title: 'item 3'
            }
        ],
        cart: []
    },
    methods: {
        addItem: function (index) {
            this.total += 9.99;
            this.total = Math.round(this.total * 100) / 100;

            var item = this.items[index];
            this.cart.push({
                title: item.title,
                qty: 1,
            });
        }
    }
});