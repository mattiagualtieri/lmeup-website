<template>
    <div class="past-events-button">
        <button class="button white-button fadable">See all past events</button>
    </div>
</template>
  
<script>
    export default {
        name: 'SeeAllButtonComponent'
    }
</script>
  
<style scoped>

.button {
    border-radius: 16px;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border: 2px solid #006321;
}

.green-button {
    background-color: #006321;
    color: white;
}

.green-button:hover {
    background-color: white; 
    color: black; 
    border: 2px solid #006321;
}

.white-button {
    background-color: white; 
    color: black;
}

.white-button:hover {
    background-color: #006321;
    color: white; 
    border: 2px solid #006321;
}

.past-events-button {
    display: flex;
    justify-content: center;
    margin-bottom: 52px;
}

</style>