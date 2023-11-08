<template>
    <div class="teste h-96 w-full">
        <div class="flex justify-between">
        <div class="px-12 py-14 max-w-lg">
            <div class="text-base text-white pb-4">LOREM IPSUM</div>
            <div class="text-4xl text-white">Lorem ipsum dolor sit </div>
            <div class="text-4xl text-white pb-5">Sed quia accusamus vel</div>
            <div class="text-base text-white">Lorem ipsum dolor sit amet. Sed quia accusamus vel temporibus incidunt eos inventore saepe qui adipisci dicta. Hic iusto voluptas qui  </div>
            <q-btn
                push
                class="q-mt-xl"
                color="red"
                text-color="black"
                unelevated
                to="/"
                label="Iniciar Teste"
                no-caps
            ></q-btn>
        </div>
        <img src="../../../assets/image/mascote.png" class="h-96"/>
        </div>
    </div>
</template>

<script>

export default {
    name: 'heroSection',
}
</script>

<style>
.teste {
    background: -webkit-linear-gradient(left, #28242c, #cc1c2c);
    background: -moz-linear-gradient(left, #28242c, #cc1c2c);
    background: -ms-linear-gradient(left, #28242c, #cc1c2c);
    background: -o-linear-gradient(left, #28242c, #cc1c2c);
    background: linear-gradient(to right, #28242c, #cc1c2c);   
}
</style>
