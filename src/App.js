
import styles from './App.css'; 

function App() {
  return (
    <div className={styles.page1}>
         <div>
        <div id="page1">
          <div id="nav">
            <img src="https://logos-world.net/wp-content/uploads/2023/09/Dribbble-Logo.png" alt="" />
            <div id="nav-part1">
              <h4>
                <div className="dropdown">
                  <button className="dropbtn">Dropdown 
                    <i className="fa fa-caret-down" />
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </h4>
              <h4>Inspiration</h4>
              <h4>
                <div className="dropdown">
                  <button className="dropbtn">Dropdown 
                    <i className="fa fa-caret-down" />
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div></h4>
              <h4>Jobs</h4>
              <h4>Go Pro</h4>
            </div>
            <div>
              <form>
                <div className="search">
                  <span className="Search-icon material-symbols-outlined">search</span>
                  <input className="search-input" type="search" placeholder="Search" />
                </div>
              </form>
            </div>
            <div id="nav-part2">
              <button>Log in</button>
              <button type="button">Sign up</button>
            </div>
          </div>
          <div id="content">
            <h3>Over 3 million ready-to-work creatives!</h3>
            <h1>The world’s destination <br /> for design</h1>
            <h4>Get inspired by the work of millions of top-rated designers &amp; agencies around the world.</h4>
            <button>Get started</button>
            <div id="bottom">
              <div className="elem">
                <img src="https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=273x340&vertical=center" alt="" />
                <div className="text-bottom1">
                  <h4>Helen Tran <br /> Lead Product Designer</h4>
                  <button>Product</button>
                  <button>Brand</button>
                </div>
              </div>
              <div className="elem">
                <video src="https://cdn.dribbble.com/uploads/47181/original/1e3a73a174484bef522b620c401cd00a.mp4?1685645427" autoPlay muted loop />
                <div className="text-bottom1">
                  <h4>Helen Tran <br /> Lead Product Designer</h4>
                  <button>Product</button>
                  <button>Brand</button>
                </div>
              </div>
              <div className="elem">
                <img src="https://cdn.dribbble.com/uploads/47178/original/mercedes-bazan.png?1689174566&format=webp&resize=273x340&vertical=center" alt="" />
                <div className="text-bottom1">
                  <h4>Helen Tran <br /> Lead Product Designer</h4>
                  <button>Product</button>
                  <button>Brand</button>
                </div>
              </div>
              <div className="elem">
                <video src="https://cdn.dribbble.com/uploads/47179/original/35d07cfebd303e05e688078015da0cc2.mp4?1685645373" autoPlay muted loop />
                <div className="text-bottom1">
                  <h4>Helen Tran <br /> Lead Product Designer</h4>
                  <button>Product</button>
                  <button>Brand</button>
                </div>
              </div>
              <div className="elem">
                <img src="https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=273x340&vertical=center" alt="" />
                <div className="text-bottom1">
                  <h4>Helen Tran <br /> Lead Product Designer</h4>
                  <button>Product</button>
                  <button>Brand</button>
                </div>
              </div>
              <div className="elem">
                <video src="https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402" autoPlay muted loop />
                <div className="text-bottom1">
                  <h4>Helen Tran <br /> Lead Product Designer</h4>
                  <button>Product</button>
                  <button>Brand</button>
                </div>
              </div>
              <div className="elem">
                <img src="https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=273x340&vertical=center" alt="" />
                <div className="text-bottom1">
                  <h4>Helen Tran <br /> Lead Product Designer</h4>
                  <button>Product</button>
                  <button>Brand</button>
                </div>
              </div>
              <div className="elem">
                <video src="https://cdn.dribbble.com/uploads/47179/original/35d07cfebd303e05e688078015da0cc2.mp4?1685645373" autoPlay muted loop />
                <div className="text-bottom1">
                  <h4>Helen Tran <br /> Lead Product Designer</h4>
                  <button>Product</button>
                  <button>Brand</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="page2">
          <h1>Explore inspiring designs</h1>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12654993/file/original-35023e0f6547509ed29dcce92115ccc3.png?crop=91x83-1505x1143&resize=400x300&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12782744/file/original-646507b52ad0695709e25ecbfc259766.jpg?resize=400x300&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12792683/file/original-2980cf8b231dc6e6e332981b265d7704.jpg?resize=400x300&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12750427/file/original-247c52cc21c5fd7e4a13d539a4a14c32.png?resize=400x300&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12506394/file/original-f455d4b8d0e1eef7803e73d417534046.jpg?resize=320x240&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12763826/file/original-b139ebaef95376fdd4ba012f6485e3a7.png?resize=320x240&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12816258/file/original-e8c43064aea6c3eaba1f16734c2e05a6.jpg?resize=320x240&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12805829/file/original-f44d088af41702336027b17cf44fdd5e.png?resize=320x240&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12805829/file/original-f44d088af41702336027b17cf44fdd5e.png?resize=320x240&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12760399/file/original-b08345f79730dff01771a334b0cd8322.jpg?crop=0x153-1080x963&resize=320x240&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12743012/file/original-857b70f863ef12fd5569351c85dbe780.jpg?resize=320x240&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12742979/file/original-b314c783b8964544e5ad567c42cb89a0.png?resize=320x240&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12757360/file/original-9f7a253d32eecb4b32cdbb58aaa26955.gif" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12662105/file/original-123b074356491c7901de62ef810f0f07.jpg?resize=320x240&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12775563/file/original-fb775b8c7e0e709754f52296f002b92f.jpg?resize=320x240&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.dribbble.com/userupload/12773665/file/original-db53d81319598a083de89624466434b1.png?resize=320x240&vertical=center" alt="" />
            <div className="box-bottom">
              <h5>Productivity</h5>
              <i className="ri-heart-3-line" onclick="toggleLike(this)" />
            </div>
          </div>
          <button>Browse more inspiration</button>
        </div>
        <div id="page3">
          <h1>Find your next <br /> designer today</h1>
          <h6>The world’s leading brands use Dribbble to hire creative talent. <br /> Browse millions of top-rated portfolios to find your perfect <br /> creative match</h6>
          <div className="page3-button">
            <button>Get started now</button>
            <button>Learn about hiring</button>
          </div>
          <h5>Are you a designer?
            <border>Join Dribbble</border>
          </h5>
        </div>
        <div id="page4">
          <div id="page4-top">
            <div className="page4-box">
              <div className="box-elem">
                <img src="https://cdn.dribbble.com/userupload/12794751/file/original-af77d31fdd4895d71533f151b7cbe372.jpg?format=webp&resize=200x150&vertical=center" alt="" />
                <h4>hey hellow</h4>
              </div>
              <div className="box-elem">
                <img src="https://cdn.dribbble.com/userupload/12775657/file/original-641fa0d9ef681538cc687f925687392d.jpg?format=webp&resize=200x150&vertical=center" alt="" />
                <h4>hey hellow</h4>
              </div>
              <div className="box-elem">
                <img src="https://cdn.dribbble.com/userupload/12741510/file/original-18c7f78639e14948d0d1a7de6e6adbbd.png?crop=0x0-1600x1200&format=webp&resize=200x150&vertical=center" alt="" />
                <h4>hey hellow</h4>
              </div>
              <div className="box-elem">
                <img src="https://cdn.dribbble.com/userupload/12800406/file/original-d19f2064fc2dd34e2fd6e4f6ebfe5ef3.png?format=webp&resize=200x150&vertical=center" alt="" />
                <h4>hey hellow</h4>
              </div>
              <div className="box-elem">
                <img src="https://cdn.dribbble.com/userupload/12682120/file/original-3f8fa3931aeb610b8cf235a56fe96512.png?format=webp&resize=200x150&vertical=center" alt="" />
                <h4>hey hellow</h4>
              </div>
              <div className="box-elem">
                <img src="https://cdn.dribbble.com/userupload/12717341/file/original-f902424957405a743cd3f341985e69ca.png?crop=0x0-1600x1200&format=webp&resize=200x150&vertical=center" alt="" />
                <h4>hey hellow</h4>
              </div>
              <div className="box-elem">
                <img src="https://cdn.dribbble.com/userupload/12795838/file/original-b38e8ab479f62b8dfd23dd6d088132a7.png?format=webp&resize=200x150&vertical=center" alt="" />
                <h4>hey hellow</h4>
              </div>
              <div className="box-elem">
                <img src="https://cdn.dribbble.com/userupload/12667221/file/original-0d6b9a090adc056324aad947cf935774.png?format=webp&resize=200x150&vertical=center" alt="" />
                <h4>hey hellow</h4>
              </div>
            </div>
          </div>
          <div id="page4-nav" />
        </div>
      </div>
    </div>
  );
}

export default App;
