<template>
    <div class="flex bg-card h-36 rounded-3xl w-11/12 p-6 gap-5" style="background-color:  #343434;">
        <img src="../../assets/image/logo2.png" class="h-20"/>
        <div class="flex flex-col">
            <div class="text-lg text-red">{{ title }}</div>
            <div class="text-xs text-white max-w-sm">{{ description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-info',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>
