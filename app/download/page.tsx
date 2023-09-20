"use client";

import "./style.scss";

function Download() {
  const handleDownload = () => {
    const fileUrl = "/resume.pdf";
    const fileName = "resume.pdf";

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Create an object URL from the blob
        const url = window.URL.createObjectURL(blob);

        // Create an anchor element and trigger the download
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();

        // Clean up the object URL and remove the anchor element
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      });
  };

  const handleClick = (event: any) => {
    if (event?.target?.checked) {
      handleDownload();
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div id="ms-container">
          <label htmlFor="ms-download">
            <div className="ms-content">
              <div className="ms-content-inside">
                <input type="checkbox" id="ms-download" onClick={handleClick} />
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

export default Download;
