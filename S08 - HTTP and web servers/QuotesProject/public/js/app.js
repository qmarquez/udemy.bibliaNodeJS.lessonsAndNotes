window.onload = async function() {
  const quotes = (await axios.get("/quotes/all")).data;
  let rows = "";
  for (const quote of quotes) {
    rows += `<div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-0 shadow">
                <img
                  src="${quote.photo}"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">${quote.author}</h5>
                  <div class="card-text text-black-50">${quote.message}</div>
                </div>
              </div>
            </div>`;
  }

  document.querySelector("#quotes").innerHTML += rows;
};
