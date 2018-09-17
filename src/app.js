import Ractive from 'ractive';

const ractive = new Ractive({
    target: 'target',
    template: '#template',
    data: {
        yachts: [
            { name: 'Larry\'s Little Lady', type: 'yacht', owner: { type: 'business', name: 'Oracle', classifier: 'Co' } },
            { name: 'SS Minnow Johnson', type: 'yacht', owner: { type: 'person', givenName: 'Lawrence', familyName: 'Wall' } },
            { name: 'Le Grande Divorcee', type: 'yacht', owner: { type: 'business', name: 'Mr. Lawyer', classifier: 'LLC' } }
        ]
    }
});