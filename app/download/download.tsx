import "./style.scss";

function Download() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div id="ms-container">
          <label htmlFor="ms-download">
            <div className="ms-content">
              <div className="ms-content-inside">
                <input type="checkbox" id="ms-download" />
                <div className="ms-line-down-container">
                  <div className="ms-line-down"></div>
                </div>
                <div className="ms-line-point"></div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export { Download };
