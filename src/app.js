import Ractive from 'ractive';

const ractive = new Ractive({
    el: '#target',
    template: '#template',
    data: {
        item: 'pint of milk',
        price: 0.49,
        quantity: 5,
        format: num => {
            if (num < 1) return `${100 * num} p`;
                return '$' + num.toFixed(2);
        }
    }
});

ractive.set({
    item: 'banana',
    price: 0.19,
    quantity: 7
});