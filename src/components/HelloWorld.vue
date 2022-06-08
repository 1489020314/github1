<template>
    <div id="HelloWorld">
        <div>
            <h1>我是hello-word</h1>
        </div>
        <div>
            <router-link to="/hello-world/one">one</router-link>
            <router-link to="/hello-world/two">two</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'HelloWorld',
    components: {},
    props: {},
}
</script>

<style scoped>

</style>
