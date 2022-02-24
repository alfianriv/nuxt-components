import TButton from './TButton.vue';

export default {
    title: 'TButton',
    component: TButton,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['button', 'reset', 'submit'],
            },
            defaultValue: 'button',
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'default', 'success', 'danger', 'warning', 'info'],
            },
            defaultValue: 'default',
        },
        borderRadius: {
            control: {
                type: 'select',
                options: ['rounded', 'full'],
            },
        },
        disabled: {
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        }
    }
}

const Template = (args, { argTypes }) => ({
    components: { TButton },
    props: Object.keys(argTypes),
    template: '<TButton :type="type" :color="color" :disabled="disabled" :borderRadius="borderRadius">Click Me</TButton>',
})

export const Basic = Template.bind({})
