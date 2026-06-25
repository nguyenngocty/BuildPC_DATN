function AdminPlaceholder({ title, description, icon }) {
  return (
    <section className="dashboard-heading">
      <div>
        <span className="page-kicker">Admin</span>

        <h1>
          <i className={`bi ${icon}`} /> {title}
        </h1>

        <p>{description}</p>
      </div>
    </section>
  );
}

export default AdminPlaceholder;