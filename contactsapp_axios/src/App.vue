<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 애플리케이션</h1>
      <p>(Dynamic Component + EventBus + Axios)</p>
    </div>

    <component :is="currentView" :contact="contact"></component>
    <!-- <add-contact v-if="currentView === 'addContact'"></add-contact>
    <update-contact v-if="currentView === 'updateContact'"></update-contact>
    <update-photo v-if="currentView === 'updatePhoto'"></update-photo>  -->

    <contactList :contactlist="contactlist"></contactList>
  </div>
</template>

<script>
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';
import UpdatePhoto from './components/UpdatePhoto';
import CONF from './Config.js';
import eventBus from './EventBus.js';

export default {
  name: 'app',
  components: {
    ContactList,
    AddContact,
    UpdateContact,
    UpdatePhoto
  },
  data() {
    return {
      currentView: null,
      contact: {
        no: 0,
        name: '',
        tel: '',
        address: '',
        photo: ''
      },
      contactlist: {
        pageno: 1,
        pagesize: CONF.PAGESIZE,
        totalcount: 0,
        contacts: []
      }
    };
  },
  mounted() {
    this.fetchContacts();
    eventBus.$on('cancel', () => {
      //취소버튼 눌렀을 때
      this.currentView = null;
    });
    eventBus.$on('addSubmit', contact => {
      //연락처 추가
      this.currentView = null;
      this.addContact(contact);
    });
    eventBus.$on('updateSubmit', contact => {
      //연락처 업데이트
      this.currentView = null;
      this.updateContact(contact);
    });
    eventBus.$on('addContactForm', () => {
      //연락처 추가 폼 띄우기
      this.currentView = 'addContact';
    });
    eventBus.$on('editContactForm', no => {
      // 연락처 수정 폼 띄우기
      this.fetchContactOne(no);
      this.currentView = 'updateContact';
    });
    eventBus.$on('deleteContact', no => {
      // 연락처 삭제 버튼 클릭했을때
      this.deleteContact(no);
    });
    eventBus.$on('editPhoto', no => {
      // 연락처의 사진 정보 수정하는 페이지 띄우기
      this.fetchContactOne(no);
      this.currentView = 'updatePhoto';
    });
    eventBus.$on('updatePhoto', (no, file) => {
      // 사진 업데이트
      if (typeof file !== 'undefined') {
        this.updatePhoto(no, file);
      }
      this.currentView = null;
    });
    eventBus.$on('pageChanged', page => {
      // 페이징 처리 페이지 바꾸기
      this.pageChanged(page);
    });
  },
  methods: {
    pageChanged(page) {
      this.contactlist.pageno = page;
      this.fetchContacts();
    },
    fetchContacts() {
      this.$axios
        .get(CONF.FETCH, {
          params: {
            pageno: this.contactlist.pageno,
            pagesize: this.contactlist.pagesize
          }
        })
        .then(response => {
          this.contactlist = response.data;
        })
        .catch(ex => {
          console.log('fetchContacts failed', ex);
          this.contactlist.contacts = [];
        });
    },
    addContact(contact) {
      this.$axios
        .post(CONF.ADD, contact)
        .then(response => {
          if (response.data.status === 'success') {
            this.contactlist.pageno = 1;
            this.fetchContacts();
          } else {
            console.log('연락처 추가 실패: ' + response.data.message);
          }
        })
        .catch(ex => {
          console.log('addContact failed', ex);
        });
    },
    fetchContactOne(no) {
      this.$axios
        .get(CONF.FETCH_ONE.replace('${no}', no))
        .then(response => {
          this.contact = response.data;
        })
        .catch(ex => {
          console.log('fetchContactOne failed', ex);
        });
    },
    updateContact(contact) {
      this.$axios
        .put(CONF.UPDATE.replace('${no}', contact.no), contact)
        .then(response => {
          if (response.data.status === 'success') {
            this.fetchContacts();
          } else {
            console.log('연락처 변경 실패 : ' + response.data.message);
          }
        })
        .catch(ex => {
          console.log('updateContact failed ', ex);
        });
    },
    deleteContact(no) {
      this.$axios
        .delete(CONF.DELETE.replace('${no}', no))
        .then(response => {
          if (response.data.status === 'success') {
            this.fetchContacts();
          } else {
            console.log('연락처 삭제 실패 : ' + response.data.message);
          }
        })
        .catch(ex => {
          console.log('delete failed', ex);
        });
    },
    updatePhoto(no, file) {
      var data = new FormData();
      data.append('photo', file);
      this.$axios
        .post(CONF.UPDATE_PHOTO.replace('${no}', no), data)
        .then(response => {
          if (response.data.status === 'success') {
            this.fetchContacts();
          } else {
            console.log('연락처 사진 변경 실패 : ' + response.data.message);
          }
        })
        .catch(ex => {
          console.log('updatePhoto failed', ex);
        });
    }
  }
};
</script>

<style>
#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
