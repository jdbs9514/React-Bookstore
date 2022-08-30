function Form() {
  return (
    <form className="form">
      <input type="text" className="inputbook" placeholder="Book" required />
      <input type="text" className="inputauthor" placeholder="Author" required />
      <button type="submit" className="submit">Submit</button>
    </form>
  );
}

export default Form;
