<template>
    <p>
        이름: <input typel="text" v-model.trim="name" placeholder="두글자 이상 입력후 엔터!" @keyup.enter="keyupEvent">
    </p>
</template>
<script>
import Constant from '../Constant'
export default {
    name: 'search',
    data(){
        return{name:''};
    },
    methods: {
        keyupEvent(e){
            var val = e.target.value;
            if(val.length >= 2){
                this.$store.dispatch(Constant.SEARCH_CONTACT,{name:val})
            }else{
                this.$store.dispatch(Constant.SEARCH_CONTACT,{name: ''})
            }
        }
    },
}
</script>