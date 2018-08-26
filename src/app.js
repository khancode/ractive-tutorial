import Ractive from 'ractive';

const ractive = new Ractive({
    target: '#target',
    template: '#template',
    data: {
        country: {
            name: 'The UK',
            climate: { temperature: 'cold', rainfall: 'excessive' },
            population: 63230000,
            capital: { name: 'London', lat: 51.5171, lon: -0.1062 }
        }
    }
});

// Update nested property
const country = ractive.get('country');
country.climate.rainfall = 'very high';
ractive.update('country');

// Easier way
ractive.set('country.climate.rainfall', 'too much');
