<template>
    <div class="contact">
        <font-awesome-icon :icon="['fab', 'whatsapp']" size="lg" style="color: #0c8a03;" />
        <h4>{{ number }}</h4>
        <h4>{{ contact }}</h4>
    </div>
</template>
  
<script>
export default {
    name: 'MobileNumberComponent',
    props: {
        contact: String,
        number: String
    },
}
</script>
  
<style scoped>

.contact {
    font-size: 24px;
    margin-left: 96px;
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: left;
}

h4 {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 0;
    margin-bottom: 0;
}

a {
    color: black;
}

@media (max-width: 850px) {
    .contact {
        font-size: 22px;
        margin-left: 52px;
        margin-top: 12px;
        display: flex;
        align-items: center;
        justify-content: left;
    }
}

</style>
  