import Ractive from 'ractive';

const ractive = new Ractive({
    el: '#target',
    template: '#template',
    data: {
        me: { cows: 0 },
        sibling: { cows: 0 }
    }
});