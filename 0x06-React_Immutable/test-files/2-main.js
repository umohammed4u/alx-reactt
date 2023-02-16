import accessImmutableObject from "../2-nested";

accessImmutableObject({
    name: {
        first: 'Olumide',
        last: 'Micheal'
    }
}, ['name', 'first'])