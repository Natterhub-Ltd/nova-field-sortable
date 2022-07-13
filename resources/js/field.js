import IndexField from './components/IndexField.vue';

Nova.booting((app, store) => {
    app.component('index-nova-field-sortable', IndexField);
})
