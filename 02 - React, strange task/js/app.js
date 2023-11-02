function App() {
    return (
        <div className="wrapper container">
            <Header/>
            <Banner/>
            <Main/>
        </div>
    )
}

function Header() {
    return (
        <header className="nav_wrapper">
            <img src="#" alt="" className="logo" />
            <p className="blog_name">Blog name</p>
            <ul className="main_nav">
              <li className="nav_item"></li>
              <li className="nav_item"></li>
              <li className="nav_item"></li>
              <li className="nav_item"></li>
              <li className="nav_item"></li>
            </ul>
          </header>
    )
}
function Banner() {
    return (
        <section className="banner container">
        </section>
    )
}
function Main() {
    return (
        <main className="main_wrapper">
        <section className="blog">
          <p>Blog</p>
          <ul className="posts">
            <li className="post_item"></li>
            <li className="post_item"></li>
            <li className="post_item"></li>
            <li className="post_item"></li>
          </ul>
        </section>
        <section className="news">
          <p>News</p>
          <ul className="news_section">
            <li className="news_item"></li>
            <li className="news_item"></li>
            <li className="news_item"></li>
          </ul>
        </section>
      </main>
    )
}













const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App))