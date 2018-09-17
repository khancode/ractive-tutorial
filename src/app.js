import Ractive from 'ractive';

const item = "<li class-done='.done'>" +
    "   <input type='checkbox' checked='{{.done}}'>" +
    "   <span class='description' on-click=\"edit\">" +
    "   {{.description}}" +
    "   {{#if .editing}}" +
    "     <input class='edit'" +
    "              value='{{.description}}'" +
    "              on-blur='@context.toggle( \".editing\" ), false'" +
    "              on-keydown=\"@.enterExit( @event, @context )\">" +
    "   {{/if}}" +
    "   </span>" +
    "   <button class='button' on-click='@context.splice( \"../\", @index, 1 )'>×</button>" +
    " </li>";

const ractive = new Ractive({
    target: 'target',
    template: '#template',

    // Add the 'item' partial here
    partials: { item },

    addItem: function ( description ) {
        this.push( 'items', {
            description: description,
            done: false
        });
    },

    removeItem: function ( index ) {
        this.splice( 'items', index, 1 );
    },

    editItem: function ( index ) {
    },
  
    // instance event handlers
    on: {
        newTodo: function ( ctx ) {
            this.addItem( ctx.node.value );
            ctx.node.value = '';
            setTimeout( function () {
                ctx.node.focus();
            });
        },
        edit: function ( ctx ) {
            let keydownHandler, blurHandler, input, currentDescription;

            currentDescription = ctx.get( '.description' );
            ctx.set( '.editing', true );

            input = this.find( '.edit' );
            input.select();
            input.currentDescription = currentDescription;
        }
    },
  
    data: {
        items: [
            { done: true,  description: 'Add a todo item' },
            { done: false, description: 'Add some more todo items' },
            { done: false, description: 'Complete all the Ractive tutorials' }
        ]
    },
  
    enterExit: function ( ev, ctx ) {
        if ( ev.which === 13 ) { // ENTER
            ctx.node.blur();
        } else if ( ev.which === 27 ) { // ESCAPE
            var node = ctx.node;
            node.value = node.currentDescription;
            ctx.set( '.description', node.value );
            node.blur();
        }
    }
});