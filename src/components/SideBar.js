import '../styles/sideBar.css';
 
const SideBar = () => {
  return (
    <div className="parent_div">
      <div className="title">
        <h4>Sizes:</h4>
        <div className="sizes">
          <div>
            <label>
              <input type="checkbox" name="size" value="XS" />
              <span>XS</span>
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="size" value="S" />
              <span>S</span>
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="size" value="M" />
              <span>M</span>
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="size" value="ML" />
              <span>ML</span>
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="size" value="L" />
              <span>L</span>
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="size" value="XL" />
              <span>XL</span>
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="size" value="XXL" />
              <span>XXL</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
