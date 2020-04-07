import Constant from '../Constant';

//상태를 변경하는 기능만을 구현합니다.
export default {
    [Constant.ADD_CONTACT_FORM]: (state) => { //추가 버튼 누르면 데이터 초기화, 모드변경, 커런트뷰 contactForm으로 바꿔서 폼보여줌
        state.contact = { no: '', name: '', tel: '', address: '', photo: '' };
        state.mode = "add";
        state.currentView = "contactForm";
    },
    [Constant.CANCEL_FORM]: (state) => { //폼 닫기
        state.currentView = null;
    },
    [Constant.EDIT_CONTACT_FORM]: (state, payload) => { //payload.contact는 클릭한 contact의 정보를 담고있음 / 정보 업데이트 폼 열어줌
        state.contact = payload.contact;
        state.mode = "update";
        state.currentView = "constactForm";
    },
    [Constant.EDIT_PHOTO_FORM]: (state, payload) => { //payload.contact는 클릭한 contact의 정보를 담고있음 / 사진 업데이트 폼 열어줌
        state.contact = payload.contact;
        state.currentView = "updatePhoto";
    },
    [Constant.FETCH_CONTACTS]: (state, payload) => {
        state.contactlist = payload.contactlist;
    }
}