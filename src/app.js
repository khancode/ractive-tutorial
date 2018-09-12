import Ractive from 'ractive';

const ractive = new Ractive({
    el: '#target',
    template: '#template',
    data: {
        country: 'the UK',
        population: 63230000,
        format: num => {
            if (num > 1000000000) return `${(num / 1000000000).toFixed(1)} billion`;
            if (num > 1000000) return `${(num / 1000000).toFixed(1)} million`;
            if (num > 1000) return `${Math.floor(num / 1000)} , ${(num % 1000)}`;
            return num;
        }
    }
});

ractive.set({
    country: 'China',
    population: 1351000000
});