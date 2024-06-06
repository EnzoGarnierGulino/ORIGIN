<template>
    <div>
        <input type="text" :value="searchQuery" @input="onSearch" placeholder="Search for a song here or browse songs by artist name!" class="bar" />
    </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        props: {
            searchQuery: {
                type: String,
                required: true
            }
        },
        methods: {
            onSearch(event) {
                this.$emit('update:searchQuery', event.target.value);
            }
        }
    }
</script>

<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .bar {
        margin-bottom: 20px;
        animation: fadeIn 2s ease-in;
        padding: 30px;
        width: 100%;
        max-width: 1000px;
        font-size: 25px;
        border: 1px solid #ccc;
        font-family: Arial;
        border-radius: 7px;
    }
</style>
