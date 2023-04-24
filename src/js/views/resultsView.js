import View from './View';
import previewView from './previewView';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    '⚠ No recipes found for your query ! Please insert another one ;)';
  _message = '';

  _generateMarkup() {
    const markup = this._data
      .map(result => previewView.render(result, false))
      .join('');

    return markup;
  }
}

export default new ResultsView();
