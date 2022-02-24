<template>
  <button :type="type" :disabled="disabled" :class="classs">
    <slot />
  </button>
</template>
<script lang="ts">

enum ButtonType {
    button = 'button',
    submit = 'submit',
    reset = 'reset'
}

enum ButtonColor {
    primary = 'primary',
    default = 'default',
    success = 'success',
    danger = 'danger',
    warning = 'warning',
    info = 'info',
}

enum BorderRadius {
    rounded = 'rounded-lg',
    full = 'rounded-full',
}

export default {
    name: 'TButton',
    props: {
        type: {
            type: String as () => ButtonType,
            default: 'button'
        },
        color: {
            type: String as () => ButtonColor,
            default: 'default'
        },
        borderRadius: {
            type: String as () => BorderRadius,
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classs() {
            return {
                'tada-button': true,
                [this.color]: true,
                [this.borderRadius]: Boolean(this.borderRadius),
                [`disabled:opacity-50 disabled:cursor-not-allowed`]: Boolean(this.disabled),
            }
        }
    }
}
</script>
<style lang="postcss" scoped>
.tada-button {
  min-width: 84px;
  min-height: 32px;

  @apply px-5 py-1 text-center shadow-xl;
}

.tada-button.primary {
  @apply bg-blue-400 text-white;
}

.tada-button.primary:hover {
  @apply bg-blue-500;
}

.tada-button.default {
    @apply bg-gray-200 text-gray-700;
}

.tada-button.default:hover {
    @apply bg-gray-300;
}

.tada-button.success {
    @apply bg-green-200 text-green-700;
}

.tada-button.success:hover {
    @apply bg-green-300;
}

.tada-button.danger {
    @apply bg-red-200 text-red-700;
}

.tada-button.danger:hover {
    @apply bg-red-300;
}

.tada-button.warning {
    @apply bg-orange-200 text-orange-700;
}

.tada-button.warning:hover {
    @apply bg-orange-300;
}

.tada-button.info {
    @apply bg-sky-200 text-sky-700;
}

.tada-button.info:hover {
    @apply bg-sky-300;
}

.tada-button.rounded {
    @apply rounded-lg;
}

.tada-button.full {
    @apply rounded-full;
}
</style>