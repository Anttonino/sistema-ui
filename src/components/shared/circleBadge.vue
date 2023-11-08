<template>
    <div class="flex flex-col">
        <div class="outer-circle">
            <div class="inner-circle">{{ label }}</div>
        </div>
        <div v-if="line" class="vertical-line ml-10"></div>
    </div>
</template>

<script>
export default {
    name: 'circle-badge',
    props: {
        label: {
            type: String,
            required: true
        },
        line: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style>
.outer-circle {
    width: 60px;
    height: 60px;
    background-color: #28242c;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    font-size: 20px;
    color: #000;
}

.inner-circle {
    width: 50px;
    height: 50px;
    background-color: #ff2400; /* Cor de fundo do círculo interno */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.vertical-line {
  width: 2px; 
  height: 125px; 
  background-color: white; 
}

</style>
