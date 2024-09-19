// messages.js

const messages = {
    // validate
    VALIDATE: {
        NOT_EMPTY: "Vui lòng không bỏ trống",
        NOT_EMPTY_EMAIL: "Vui lòng không bỏ trống",
        PHONE: "Số điện thoại từ 8 đến 13 số",
        PASSWORD_NOT_MATCH: "Mật khẩu không trùng khớp",
        PASSWORD_RETYPE: "Vui lòng nhập lại mật khẩu",
    },

    // Thông báo thành công
    SUCCESS: {
        CREATE: "Tạo mới thành công.",
        UPDATE: "Cập nhật thành công.",
        DELETE: "Xóa thành công.",
        FETCH: "Lấy dữ liệu thành công.",
        LOGIN: "Đăng nhập thành công",
    },

    // Thông báo lỗi
    ERROR: {
        CREATE: "Có lỗi xảy ra khi tạo mới.",
        UPDATE: "Có lỗi xảy ra khi cập nhật.",
        DELETE: "Có lỗi xảy ra khi xóa.",
        FETCH: "Có lỗi xảy ra khi lấy dữ liệu.",
        NOT_FOUND: "Không tìm thấy dữ liệu.",
        VALIDATION: "Dữ liệu không hợp lệ.",
        LOGIN: "Đăng nhập thất bại",
    },

    // Thông báo cảnh báo
    WARNING: {
        CONFIRM_DELETE: "Bạn có chắc chắn muốn xóa không?",
        UNSAVED_CHANGES: "Bạn có thay đổi chưa lưu, bạn có chắc muốn rời khỏi trang này?",
    },

    // Thông báo xác nhận
    CONFIRMATION: {
        DELETE: "Bạn có muốn xóa mục này không?",
        SUBMIT: "Bạn có muốn gửi thông tin này không?",
    },

    // Thông báo khác
    INFO: {
        NO_DATA: "Không có dữ liệu để hiển thị.",
        LOADING: "Đang tải dữ liệu...",
    },
};

export default messages;
