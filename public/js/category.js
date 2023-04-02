const routesContainer = document.getElementById('routes-row');

const fetchAndRenderRoutesCategory = async () => {
  try {
    const routesContainer = document.getElementById('routes-row');

    routesContainer.innerHTML = `
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-main" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;

    const routesRes = await fetch('/js/category.json');
    const routes = (await routesRes.json()) ?? [];

    routesContainer.innerHTML = routes
      .map(({ name, description, icon }) => {
        return `
        <div class="col-md-4 col-12">
          <a class="router-card-anchor" href="#${name}-example">
                  <div class="route-card" id="routes-${name}">
                      <div class="route-card-content">
                        <h3>${name}</h3>
                        <p>
                          ${description}
                        </p>
                      </div>
                      <div class="route-card-icon">
                        <i class="${icon}"></i>
                      </div>
                  </div>
          </a>
        </div>
        `;
      })
      .join('');
  } catch (error) {
    // handle error
  }
};

window.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderRoutesCategory();
});
