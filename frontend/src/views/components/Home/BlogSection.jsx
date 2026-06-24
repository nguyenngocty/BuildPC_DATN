import SectionTitle from "./SectionTitle";

function BlogSection() {
  const blogs = [
    "Cách chọn VGA phù hợp năm 2026",
    "Build PC gaming dưới 15 triệu",
    "So sánh CPU Intel vs AMD",
  ];

  return (
    <>
      <SectionTitle title="Tin tức & hướng dẫn" />

      <div className="blog-grid">
        {blogs.map((title, index) => (
          <div className="blog-card" key={index}>
            <h5>{title}</h5>
            <p>
              Hướng dẫn chọn linh kiện phù hợp cho nhu cầu học tập, gaming và
              làm việc.
            </p>
            <a href="/">Xem thêm</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogSection;
