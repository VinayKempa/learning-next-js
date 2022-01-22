function ErrorPage(props) {
  const { error } = props;
  console.log("ERROR: ", error);
  return error ? (
    <div className="error-page">
      <p>{error || ""}</p>
    </div>
  ) : (
    ""
  );
}

export default ErrorPage;
