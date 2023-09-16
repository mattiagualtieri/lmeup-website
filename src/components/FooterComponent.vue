<template>
    <div class="footer">
        <div class="socials">
            Follow us on Instagram <a href="#" class="instagram-link"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        </div>
        <div class="bottom-navbar">
            <ul class="bottom-navigation">
                <li><a href="#">Events</a></li>
                <li>|</li>
                <li><a href="#">Photos</a></li>
                <li>|</li>
                <li><a href="#">Home</a></li>
                <li>|</li>
                <li><a href="#">FAQs</a></li>
                <li>|</li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'FooterComponent'
}
</script>
  
<style scoped>

a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.socials {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
}

.instagram-link {
    margin-left: 5px;
}

.bottom-navbar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.bottom-navigation {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 450px) {
    .socials {
        font-size: 20px;
    }

    .bottom-navigation {
        font-size: 14px;
    }
}

</style>