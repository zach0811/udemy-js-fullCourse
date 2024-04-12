import icons from '../../img/icons.svg'; // Parcel 1

import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.textContent.match(/\d+/)[0];
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    //Page1 and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return `<button class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}g#icon-arrow-right"></use>
      </svg>
    </button>`;
    }

    //Last page
    if (currentPage === numPages && numPages > 1) {
      return `<button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button>`;
    }

    //other page
    if (currentPage < numPages) {
      return `<button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button>
    <button class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}g#icon-arrow-right"></use>
      </svg>
    </button>`;
    }

    //Page 1 and there are no other pages
    return '';
  }
}

export default new PaginationView();
