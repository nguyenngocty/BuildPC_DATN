import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PostForm.css';

const PostForm = ({ isEdit = false }) => {
  const { id } = useParams();

  // 1. Thêm trường author vào State
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'Hướng dẫn',
    status: 'Đã xuất bản',
    author: 'Admin ForgePC' // Giá trị mặc định khi tạo mới
  });

  useEffect(() => {
    if (isEdit && id) {
      const fakeDatabase = {
        "1": { 
          title: 'Hướng dẫn build PC 20 triệu chơi mượt mọi game', 
          content: 'Đây là nội dung chi tiết hướng dẫn build PC với 20 triệu. Bao gồm mainboard, CPU, RAM, VGA...',
          category: 'Hướng dẫn',
          status: 'Đã xuất bản',
          author: 'Admin ForgePC'
        },
        "2": { 
          title: 'Đánh giá chi tiết Intel Core i9 thế hệ mới', 
          content: 'Intel Core i9 mới mang lại hiệu năng vượt trội nhưng nhiệt độ khá cao...',
          category: 'Đánh giá',
          status: 'Bản nháp',
          author: 'Nguyễn Văn A'
        },
        "3": { 
          title: 'Top 5 Card Đồ Họa Đáng Mua Nhất 2023', 
          content: 'Danh sách 5 chiếc VGA có hiệu năng trên giá thành (p/p) tốt nhất hiện nay...',
          category: 'Tin tức',
          status: 'Đã xuất bản',
          author: 'Admin ForgePC'
        }
      };

      if (fakeDatabase[id]) {
        setFormData(fakeDatabase[id]);
      }
    } else {
      setFormData({
        title: '',
        content: '',
        category: 'Hướng dẫn',
        status: 'Bản nháp',
        author: 'Admin ForgePC'
      });
    }
  }, [isEdit, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="admin-post-form">
      <div className="page-header">
        <div className="header-title">
          <h2>{isEdit ? `Chỉnh sửa bài viết (ID: ${id})` : 'Tạo bài viết mới'}</h2>
          <p>{isEdit ? 'Cập nhật nội dung cho bài viết hiện tại.' : 'Thêm một bài viết, hướng dẫn hoặc tin tức mới.'}</p>
        </div>
        <div className="header-actions">
          <Link to="/admin/posts" className="btn-cancel" style={{ textDecoration: 'none' }}>
            Hủy
          </Link>
          <button className="btn-save">
            <i className="bi bi-save"></i> {isEdit ? 'Cập nhật' : 'Xuất bản'}
          </button>
        </div>
      </div>

      <div className="form-container">
        <div className="form-main">
          <div className="form-group">
            <label>Tiêu đề bài viết <span className="required">*</span></label>
            <input 
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              className="form-control" 
              placeholder="Nhập tiêu đề tại đây..." 
            />
          </div>

          <div className="form-group">
            <label>Nội dung <span className="required">*</span></label>
            <div className="editor-wrapper">
              <div className="editor-toolbar">
                <button type="button"><i className="bi bi-type-bold"></i></button>
                <button type="button"><i className="bi bi-type-italic"></i></button>
                <button type="button"><i className="bi bi-link-45deg"></i></button>
                <button type="button"><i className="bi bi-image"></i></button>
                <button type="button"><i className="bi bi-list-ul"></i></button>
              </div>
              <textarea 
                name="content" 
                value={formData.content}
                onChange={handleChange}
                className="form-control editor-textarea" 
                placeholder="Nhập nội dung chi tiết..."
              ></textarea>
            </div>
          </div>
        </div>

        <div className="form-sidebar">
          <div className="sidebar-card">
            <h3>Thiết lập chung</h3>
            <div className="form-group">
              <label>Danh mục</label>
              <select name="category" value={formData.category} onChange={handleChange} className="form-control">
                <option value="Hướng dẫn">Hướng dẫn</option>
                <option value="Đánh giá">Đánh giá</option>
                <option value="Tin tức">Tin tức</option>
              </select>
            </div>
            <div className="form-group">
              <label>Trạng thái</label>
              <select name="status" value={formData.status} onChange={handleChange} className="form-control">
                <option value="Đã xuất bản">Đã xuất bản</option>
                <option value="Bản nháp">Bản nháp</option>
              </select>
            </div>
            <div className="form-group">
              <label>Tác giả</label>
              {/* Đã gỡ disabled, thêm name, value và onChange */}
              <input 
                type="text" 
                name="author" 
                value={formData.author} 
                onChange={handleChange}
                className="form-control" 
                placeholder="Tên tác giả..."
              />
            </div>
          </div>

          <div className="sidebar-card">
            <h3>Ảnh đại diện (Thumbnail)</h3>
            <div className="thumbnail-upload">
              <div className="upload-placeholder">
                <i className="bi bi-cloud-arrow-up"></i>
                <span>Click hoặc kéo thả ảnh vào đây</span>
                <small>Hỗ trợ JPG, PNG (Max: 2MB)</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;