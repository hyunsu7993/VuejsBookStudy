export default {
    //변이와 액션 모두에서 사용
    // ADD_CONTACT_FORM: "addContactForm", //입력폼 나타내기
    // CANCEL_FORM: "cancelForm", //입력, 수정폼 닫기
    // EDIT_CONTACT_FORM: "editContactForm", //수정폼 나타내기
    // EDIT_PHOTO_FORM: "editPhotoForm", //사진 편집폼 나타내기
    FETCH_CONTACTS: "fetchContacts", //연락처 조회
    FETCH_CONTACT_ONE: "fetchContactOne", //연락처 한건 조회
    INITIALIZE_CONTACT_ONE: "initializeContactOne", //연락처 초기화

    CHANGE_ISLOADING: "changeIsLoading", //스피너 UI를 보여줄지 여부 결정

    //액션에서만 사용
    ADD_CONTACT: "addContact",
    UPDATE_CONTACT: "updateContact",
    UPDATE_PHOTO: "updatePhoto",
    DELETE_CONTACT: "deleteContact",
}