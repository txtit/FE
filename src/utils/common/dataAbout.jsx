import { FaClock, FaHandPaper, FaQuestionCircle } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

export const informations = [
    {
        id: 1,
        icon: <FaClock />,
        title: 'THỜI HẠN BẢO HÀNH:',
        context: [
            {
                code: 1,
                content: 'Thời hạn bảo hành răng sứ ADS sẽ được áp dụng khác nhau tùy theo từng loại sản phẩm. Quý khách vui lòng kiểm tra thông tin cụ thể trên thẻ bảo hành và giữ thẻ để đảm bảo quyền lợi.'
            },
        ]
    },
    {
        id: 2,
        icon: <FaHandPaper />,
        title: 'TRƯỜNG HỢP KHÔNG ĐƯỢC BẢO HÀNH:',
        context: [
            {
                code: 1,
                content: '- Thẻ bảo hành đã hết hạn, bị chỉnh sửa, hư hỏng hoặc không còn nguyên vẹn.'
            },
            {
                code: 2,
                content: '- Thông tin trên thẻ bảo hành không trùng khớp với giấy tờ cá nhân (CMND/CCCD/Hộ chiếu).'
            },
            {
                code: 3,
                content: '- Răng sứ bị gãy hoặc vỡ trước khi gắn vào miệng do va chạm, rơi rớt, hoặc chịu tác động bên ngoài.'
            },
            {
                code: 4,
                content: '- Các hư hỏng do sử dụng sai hướng dẫn từ bác sĩ hoặc không bắt nguồn từ chất lượng sản phẩm.'
            },
        ]
    },
    {
        id: 3,
        icon: <IoInformationCircle />,
        title: 'HƯỚNG DẪN CHĂM SÓC SAU KHI SỬ DỤNG RĂNG SỨ ADS:',
        context: [
            {
                code: 1,
                content: '1. Cần một khoảng thời gian để thích nghi với phục hình mới, có thể cảm thấy nhạy cảm trong vài ngày đầu.'
            },
            {
                code: 2,
                content: '2. Hạn chế sử dụng răng sứ để cắn, nhai đồ ăn quá cứng, quá nóng hoặc quá lạnh. Có thể súc miệng bằng nước muối ấm để giảm cảm giác khó chịu.'
            },
            {
                code: 3,
                content: '3. Duy trì thói quen vệ sinh răng miệng mỗi ngày, sử dụng chỉ nha khoa và nước súc miệng. Nhẹ nhàng xoa nướu để cải thiện tuần hoàn máu.'
            },
            {
                code: 4,
                content: '4. Tránh hút thuốc vì đây là nguyên nhân chính gây ố vàng và xỉn màu răng.'
            },
            {
                code: 5,
                content: '5. Nếu cảm thấy phục hình cộm hoặc khó chịu khi ăn nhai, hãy liên hệ bác sĩ ngay.'
            },
        ]
    },
    {
        id: 4,
        icon: <FaQuestionCircle />,
        title: 'LƯU Ý KHÁC:',
        context: [
            {
                code: 1,
                content: '1. Răng sứ ADS được sản xuất chính hãng tại Đức và phân phối độc quyền bởi Công ty ADS Việt Nam.'
            },
            {
                code: 2,
                content: `2. Quý khách cần sử dụng răng sứ ADS đúng theo hướng dẫn của bác sĩ điều trị.`
            },
            {
                code: 2,
                content: `3. Thẻ bảo hành có thể được yêu cầu xuất trình để hưởng quyền lợi tại các cơ sở liên kết của ADS tại Việt Nam.`
            },
        ]
    },
]