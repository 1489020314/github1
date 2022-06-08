<template>
    <div id="app">
        <div>
            <h1>路由</h1>
        </div>
        <div>
            <router-link to="/hello-world">
                <button>hello-world</button>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>


export default {
    name: 'App',
    components: {},
}
</script>

<style>

</style>
