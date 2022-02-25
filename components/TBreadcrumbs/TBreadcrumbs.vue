<template lang="">
    <div class="flex items-center gap-2">
        <div v-for="(v, i) in items" class="flex items-center gap-2">
            <a v-if="v.href" :href="v.href" class="text-blue-400">{{ v.text }}</a>
            <span v-if="!v.href">{{ v.text }}</span>
            <span v-if="i != items.length - 1">/</span>
        </div>
    </div>
</template>
<script lang="ts">
type BreadcrumbsObject = {
    text: string
    href: string
}

export default {
    name: 'TBreadcrumbs',
    props: {
        items: {
            type: Array as () => BreadcrumbsObject[],
            default: () => [{
                text: 'Home',
                href: '/'
            }]
        }
    }
}
</script>
<style lang="">
</style>