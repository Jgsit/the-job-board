import Title from "./Title";

function Header(props) {
  return (
    <header>
      <div className="container">
        <Title title={props.title} />
      </div>
    </header>
  );
}

export default Header;
