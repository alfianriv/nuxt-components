import TBreadcrumbs from './TBreadcrumbs.vue';

export default {
    title: 'TBreadcrumbs',
    component: TBreadcrumbs,
    argsTypes: {
        items: {
            control: {
                type: 'object',
            },
            defaultValue: [
                {
                    text: 'Home',
                    href: '/',
                },
                {
                    text: 'About',
                    href: '/about',
                }
            ],
        },  
    }
}

const Template = (args, { argTypes }) => ({
    components: { TBreadcrumbs },
    props: Object.keys(argTypes),
    template: '<TBreadcrumbs :items="items" />',
})

export const Basic = Template.bind({})